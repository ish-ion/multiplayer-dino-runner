/**
 * TODO: Implement Phaser Game Initialization
 * 
 * This is the main entry point for the frontend game.
 * It will:
 * - Initialize the Phaser game
 * - Configure game settings
 * - Boot up the game scenes
 */

import Phaser from 'phaser';

// TODO: Import game scenes
// import BootScene from '../scenes/BootScene';
// import MainMenu from '../scenes/MainMenu';
// import GameScene from '../scenes/GameScene';
// import GameOver from '../scenes/GameOver';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 1200,
  height: 600,
  backgroundColor: '#87CEEB',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  },
  scene: [
    // BootScene,
    // MainMenu,
    // GameScene,
    // GameOver
  ]
};

const game = new Phaser.Game(config);

export default game;