/**
 * TODO: Implement Boot Scene
 * 
 * Initial loading scene for the game.
 * Responsibilities:
 * - Load assets
 * - Initialize the game
 * - Transition to main menu or game
 */

import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }
  
  preload() {
    // TODO: Load assets
    // this.load.image('dino', 'assets/sprites/dino.png');
    // this.load.image('obstacle', 'assets/sprites/obstacle.png');
    // this.load.image('ground', 'assets/sprites/ground.png');
  }
  
  create() {
    // TODO: Show loading progress or logo
    
    // TODO: Transition to next scene
    // this.scene.start('MainMenu');
  }
}

export default BootScene;