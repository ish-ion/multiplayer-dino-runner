const { PLAYER_CONFIG } = require('../../shared/consts');

class PlayerManager {
  constructor() {
    this.players = new Map();
  }
  
  addPlayer(socketId, playerName, color, roomId) {
    const player = {
      id: socketId,
      name: playerName,
      color: color,
      roomId: roomId,
      position: { x: 100, y: 300 },
      velocity: { x: PLAYER_CONFIG.SPEED, y: 0 },
      isJumping: false,
      canJump: true,
      score: 0,
      lastInput: Date.now(),
      handleInput: function(input) {
        // Handle input changes
      }
    };
    this.players.set(socketId, player);
    return player;
  }
  
  removePlayer(socketId) {
    this.players.delete(socketId);
  }
  
  getPlayer(socketId) {
    return this.players.get(socketId);
  }
  
  getAllPlayers() {
    return Array.from(this.players.values());
  }
  
  reset() {
    this.players.forEach(player => {
      player.position = { x: 100, y: 300 };
      player.velocity = { x: PLAYER_CONFIG.SPEED, y: 0 };
      player.isJumping = false;
      player.canJump = true;
      player.score = 0;
    });
  }
}

module.exports = PlayerManager;