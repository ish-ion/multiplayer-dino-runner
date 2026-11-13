/**
 * TODO: Implement HUD (Heads-Up Display)
 * 
 * UI elements displayed during gameplay:
 * - Player 1 score/position
 * - Player 2 score/position
 * - Obstacle counter
 * - Timer
 */

import Phaser from 'phaser';

class HUD {
  constructor(scene) {
    this.scene = scene;
    
    // TODO: Create UI containers
    // this.player1Text = ...
    // this.player2Text = ...
    // this.timerText = ...
  }
  
  // TODO: Update player 1 display
  updatePlayer1(name, position, score) {
    // this.player1Text.setText(...)
  }
  
  // TODO: Update player 2 display
  updatePlayer2(name, position, score) {
    // this.player2Text.setText(...)
  }
  
  // TODO: Update timer
  updateTimer(time) {
    // this.timerText.setText(...)
  }
}

export default HUD;