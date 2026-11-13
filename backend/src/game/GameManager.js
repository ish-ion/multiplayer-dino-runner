const { GAME_SETTINGS, OBSTACLE_CONFIG } = require('../../../shared/consts');

class GameManager {
  constructor() {
    this.roomId = null;
    this.isRunning = false;
    this.lastObstacleTime = 0;
    this.obstacles = [];
  }
  
  start(roomId) {
    this.roomId = roomId;
    this.isRunning = true;
    this.obstacles = [];
    this.lastObstacleTime = Date.now();
  }
  
  update(deltaTime) {
    this.spawnObstacles();
    this.updateObstacles();
  }
  
  spawnObstacles() {
    const now = Date.now();
    
    if (now - this.lastObstacleTime > OBSTACLE_CONFIG.SPAWN_INTERVAL) {
      const type = Math.random() < 0.7 ? 'cactus' : 'pterodactyl';
      const obstacle = {
        id: Date.now() + Math.random(),
        type: type,
        position: { x: GAME_SETTINGS.CANVAS_WIDTH + 100, y: type === 'pterodactyl' ? 100 : 300 },
        width: OBSTACLE_CONFIG.WIDTH,
        height: OBSTACLE_CONFIG.HEIGHT,
        passed: false
      };
      this.obstacles.push(obstacle);
      this.lastObstacleTime = now;
    }
  }
  
  updateObstacles() {
    this.obstacles.forEach(obstacle => {
      obstacle.position.x -= OBSTACLE_CONFIG.SPEED;
    });
    
    this.obstacles = this.obstacles.filter(obs => obs.position.x + obs.width > -50);
  }
  
  isPlaying() {
    return this.isRunning;
  }
  
  getState() {
    return {
      roomId: this.roomId,
      status: this.isRunning ? 'playing' : 'waiting',
      obstacles: this.obstacles,
      finishLine: GAME_SETTINGS.FINISH_LINE_POSITION
    };
  }
  
  stop() {
    this.isRunning = false;
  }
}

module.exports = GameManager;