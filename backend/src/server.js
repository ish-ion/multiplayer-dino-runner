const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { GAME_SETTINGS } = require('../../shared/consts');
const { Events } = require('../../shared/types');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

// Initialize managers
const PlayerManager = require('./game/PlayerManager');
const RoomManager = require('./game/RoomManager');
const GameManager = require('./game/GameManager');

const playerManager = new PlayerManager();
const roomManager = new RoomManager();
const gameManager = new GameManager();

// Game loop
let gameInterval = null;
const TICK_RATE = 60;

function startGameLoop() {
  if (gameInterval) return;
  
  gameInterval = setInterval(() => {
    gameTick();
  }, 1000 / TICK_RATE);
}

function gameTick() {
  if (gameManager.isPlaying()) {
    gameManager.update(1000 / TICK_RATE);
    
    const gameState = gameManager.getState();
    const players = playerManager.getAllPlayers();
    
    if (gameState.roomId) {
      io.to(gameState.roomId).emit('gameState', {
        players: players.map(p => ({
          id: p.id,
          position: p.position,
          score: p.score,
          isJumping: p.isJumping,
          velocity: p.velocity,
          canJump: p.canJump
        })),
        obstacles: gameState.obstacles,
        finishLine: gameState.finishLine,
        currentPlayerId: gameState.currentPlayerId,
        gameStatus: gameState.status
      });
    }
  }
}

io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);
  
  // Handle player join room
  socket.on('joinRoom', (data) => {
    const { roomId, playerName, color } = data;
    
    let room = roomManager.getRoom(roomId);
    
    if (!room) {
      room = roomManager.createRoom();
      roomId = room.id;
    }
    
    const player = playerManager.addPlayer(socket.id, playerName, color, roomId);
    
    socket.join(roomId);
    socket.roomId = roomId;
    
    room = roomManager.joinRoom(socket.id, roomId, playerName);
    
    if (!room) {
      socket.emit('error', { message: 'Room is full' });
      return;
    }
    
    console.log(`Player ${playerName} joined room ${roomId}`);
    
    // Notify room of new player
    socket.to(roomId).emit('roomUpdate', {
      roomId,
      players: room.players,
      status: room.status
    });
    
    // Send own info
    socket.emit('roomUpdate', {
      roomId,
      players: room.players,
      status: room.status,
      isHost: room.players.length === 1
    });
  });
  
  // Handle requesting start game
  socket.on('startGame', () => {
    const roomId = socket.roomId;
    const room = roomManager.getRoom(roomId);
    
    if (!room) return;
    
    if (room.players.length >= 2 && room.status === 'waiting') {
      room.status = 'playing';
      gameManager.start(roomId);
      
      io.to(roomId).emit('gameStart', {
        roomId,
        startTime: Date.now()
      });
      
      console.log(`Game started in room ${roomId}`);
    }
  });
  
  // Handle player input (jump, crouch)
  socket.on('playerInput', (input) => {
    const player = playerManager.getPlayer(socket.id);
    if (!player) return;
    
    player.handleInput(input);
  });
  
  // Handle leaving room
  socket.on('leaveRoom', () => {
    const roomId = socket.roomId;
    if (!roomId) return;
    
    roomManager.leaveRoom(socket.id, roomId);
    socket.leave(roomId);
    delete socket.roomId;
    
    console.log(`Player ${socket.id} left room ${roomId}`);
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    
    const roomId = socket.roomId;
    if (roomId) {
      roomManager.leaveRoom(socket.id, roomId);
      
      socket.to(roomId).emit('roomUpdate', {
        roomId,
        players: [],
        status: 'waiting'
      });
      
      delete socket.roomId;
    }
    
    playerManager.removePlayer(socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  startGameLoop();
});

module.exports = { io, app, server };