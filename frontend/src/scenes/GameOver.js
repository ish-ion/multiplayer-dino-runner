/**
 * TODO: Implement Game Over Scene
 * 
 * Shown when the race ends.
 * Displays:
 * - Winner/loser
 * - Final scores
 * - Option to play again
 */

import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }
  
  create(data) {
    // data: { winner, scores, positions }
    
    // TODO: Display game over UI
    // - Winner announcement
    // - Final race position
    // - Play again button
    // - Quit button
  }
}

export default GameOver;