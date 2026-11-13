/**
 * TODO: Shared Constants and Settings
 * 
 * Game constants used by both client and server.
 */

// Canvas dimensions
export const CANVAS_WIDTH = 1200;
export const CANVAS_HEIGHT = 600;

// Player settings
export const PLAYER_CONFIG = {
  WIDTH: 40,
  HEIGHT: 50,
  SPEED: 200,
  JUMP_FORCE: -600,
  GRAVITY: 1500
};

// Obstacle settings
export const OBSTACLE_CONFIG = {
  WIDTH: 30,
  HEIGHT: 60,
  SPAWN_INTERVAL: 1500, // ms
  SPEED: 5
};

// Game settings
export const GAME_SETTINGS = {
  MAX_SPEED_INCREASE: 0.5, // Per second
  FINISH_LINE_POSITION: 5000,
  TICK_RATE: 60
};

// Network settings
export const NETWORK_CONFIG = {
  HEARTBEAT_INTERVAL: 5000,
  TIMEOUT: 10000
};

// Player colors (for selection)
export const PLAYER_COLORS = {
  RED: 0xff0000,
  BLUE: 0x0000ff,
  GREEN: 0x00ff00,
  YELLOW: 0xffff00,
  PURPLE: 0xff00ff,
  ORANGE: 0xff8800
};