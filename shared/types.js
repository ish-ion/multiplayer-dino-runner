/**
 * TODO: Shared Type Definitions
 * 
 * Type definitions for game objects shared between client and server.
 */

// Player input types
export const InputTypes = {
  LEFT: 'left',
  RIGHT: 'right',
  JUMP: 'jump'
};

// Game states
export const GameStates = {
  WAITING: 'waiting',
  PLAYING: 'playing',
  GAME_OVER: 'gameOver'
};

// Room statuses
export const RoomStatuses = {
  WAITING: 'waiting',
  FULL: 'full',
  PLAYING: 'playing',
  FINISHED: 'finished'
};

// Event types
export const Events = {
  // Client -> Server
  JOIN_ROOM: 'joinRoom',
  LEAVE_ROOM: 'leaveRoom',
  START_GAME: 'startGame',
  PLAYER_INPUT: 'playerInput',
  
  // Server -> Client
  ROOM_UPDATE: 'roomUpdate',
  GAME_STATE: 'gameState',
  PLAYER_UPDATE: 'playerUpdate',
  GAME_START: 'gameStart',
  GAME_OVER: 'gameOver'
};