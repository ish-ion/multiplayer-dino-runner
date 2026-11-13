class RoomManager {
  constructor() {
    this.rooms = new Map();
  }
  
  createRoom(maxPlayers = 2) {
    const roomId = this.generateRoomId();
    const room = {
      id: roomId,
      players: [],
      maxPlayers: maxPlayers,
      status: 'waiting',
      createdAt: Date.now()
    };
    this.rooms.set(roomId, room);
    return room;
  }
  
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
  
  leaveRoom(socketId, roomId) {
    const room = this.rooms.get(roomId);
    if (!room) return;
    
    room.players = room.players.filter(p => p.socketId !== socketId);
    
    if (room.players.length === 0) {
      this.rooms.delete(roomId);
    }
  }
  
  getRoom(roomId) {
    return this.rooms.get(roomId);
  }
  
  generateRoomId() {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }
  
  cleanup() {
    const now = Date.now();
    for (const [roomId, room] of this.rooms) {
      if (room.status === 'finished' && now - room.createdAt > 300000) {
        this.rooms.delete(roomId);
      }
    }
  }
}

module.exports = RoomManager;