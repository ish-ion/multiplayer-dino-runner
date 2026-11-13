/**
 * TODO: Implement Socket.IO server
 * 
 * This server will handle:
 * - Player connections & disconnections
 * - Game state synchronization
 * - Room management (lobbies)
 * - Collision detection
 * - Leaderboard updates
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

// TODO: Initialize game managers
// const GameManager = require('./game/GameManager');
// const PlayerManager = require('./game/PlayerManager');
// const RoomManager = require('./game/RoomManager');

io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);
  
  // TODO: Handle player join room
  // socket.on('joinRoom', (roomId, playerName) => { ... });
  
  // TODO: Handle player input (movement, jump)
  // socket.on('playerInput', (input) => { ... });
  
  // TODO: Handle game events
  // socket.on('startGame', () => { ... });
  // socket.on('leaveRoom', () => { ... });
  
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    // TODO: Handle player disconnection
  });
});

server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

module.exports = { io, app, server };