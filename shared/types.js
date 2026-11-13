const Events = {
  JOIN_ROOM: 'joinRoom',
  LEAVE_ROOM: 'leaveRoom',
  START_GAME: 'startGame',
  PLAYER_INPUT: 'playerInput',
  GAME_STATE: 'gameState',
  GAME_START: 'gameStart',
  GAME_OVER: 'gameOver',
  ROOM_UPDATE: 'roomUpdate',
  ERROR: 'error'
};

const GameStates = {
  WAITING: 'waiting',
  PLAYING: 'playing',
  GAME_OVER: 'gameOver'
};

module.exports = {
  Events,
  GameStates
};