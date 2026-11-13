/**
 * TODO: Implement Room Manager
 * 
 * Responsibilities:
 * - Lobby creation & management
 * - Matchmaking
 * - Room state synchronization
 * - Player queue management
 */

class RoomManager {
  constructor() {
    // TODO: Initialize rooms
    this.rooms = new Map();
    this.pendingQueue = [];
  }
  
  // TODO: Create new room
  createRoom(maxPlayers = 2) {
    const roomId = this.generateRoomId();
    const room = {
      id: roomId,
      players: [],
      maxPlayers: maxPlayers,
      status: 'waiting', // waiting, full, playing, finished
      createdAt: Date.now()
    };
    this.rooms.set(roomId, room);
    return room;
  }
  
  // TODO: Join room
  joinRoom(socketId, roomId, playerName) {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    if (room.players.length >= room.maxPlayers) return null;
    
    room.players.push({
      socketId,
      name: playerName,
      joinedAt: Date.now()
    });
    
    return room;
  }
  
  // TODO: Leave room
  leaveRoom(socketId, roomId) {
    const room = this.rooms.get(roomId);
    if (!room) return;
    
    room.players = room.players.filter(p => p.socketId !== socketId);
    
    if (room.players.length === 0) {
      this.rooms.delete(roomId);
    }
  }
  
  // TODO: Start game when room is ready
  startGame(roomId) {
    const room = this.rooms.get(roomId);
    if (!room || room.status !== 'waiting') return false;
    if (room.players.length < 2) return false;
    
    room.status = 'playing';
    return true;
  }
  
  // TODO: Generate unique room ID
  generateRoomId() {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }
  
  // TODO: Get room
  getRoom(roomId) {
    return this.rooms.get(roomId);
  }
  
  // TODO: Cleanup old rooms
  cleanup() {
    const now = Date.now();
    for (const [roomId, room] of this.rooms) {
      // Remove rooms that have been empty for too long
      if (room.status === 'finished' && now - room.createdAt > 300000) { // 5 minutes
        this.rooms.delete(roomId);
      }
    }
  }
}

module.exports = RoomManager;