/**
 * TODO: Implement Player Manager
 * 
 * Responsibilities:
 * - Track connected players
 * - Player input handling
 * - Position synchronization
 * - Player state management
 */

class PlayerManager {
  constructor() {
    // TODO: Initialize players map
    this.players = new Map();
  }
  
  // TODO: Add new player
  addPlayer(socketId, playerName, color) {
    const player = {
      id: socketId,
      name: playerName,
      color: color,
      position: { x: 0, y: 0 },
      velocity: { x: 0, y: 0 },
      isJumping: false,
      score: 0,
      lastInput: Date.now()
    };
    this.players.set(socketId, player);
    return player;
  }
  
  // TODO: Remove player
  removePlayer(socketId) {
    this.players.delete(socketId);
  }
  
  // TODO: Get player by ID
  getPlayer(socketId) {
    return this.players.get(socketId);
  }
  
  // TODO: Update player position
  updatePlayerPosition(socketId, position) {
    const player = this.players.get(socketId);
    if (player) {
      player.position = position;
      player.lastInput = Date.now();
    }
  }
  
  // TODO: Get all players
  getAllPlayers() {
    return Array.from(this.players.values());
  }
  
  // TODO: Reset all player positions
  reset() {
    this.players.forEach(player => {
      player.position = { x: 0, y: 0 };
      player.velocity = { x: 0, y: 0 };
      player.isJumping = false;
      player.score = 0;
    });
  }
}

module.exports = PlayerManager;