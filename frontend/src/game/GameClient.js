/**
 * TODO: Implement Socket.IO Client
 * 
 * Handles all communication with the backend server.
 */

import { io } from 'socket.io-client';

const SERVER_URL = import.meta.env.DEV 
  ? 'http://localhost:3000' 
  : '';

class GameClient {
  constructor() {
    // TODO: Initialize socket connection
    this.socket = null;
    this.connected = false;
  }
  
  // TODO: Connect to server
  connect() {
    // this.socket = io(SERVER_URL);
    // this.socket.on('connect', () => { ... });
  }
  
  // TODO: Disconnect from server
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
  
  // TODO: Join a room
  joinRoom(roomId, playerName) {
    if (this.socket) {
      this.socket.emit('joinRoom', roomId, playerName);
    }
  }
  
  // TODO: Leave current room
  leaveRoom() {
    if (this.socket) {
      this.socket.emit('leaveRoom');
    }
  }
  
  // TODO: Start the game
  startGame() {
    if (this.socket) {
      this.socket.emit('startGame');
    }
  }
  
  // TODO: Send player input
  sendInput(input) {
    if (this.socket) {
      this.socket.emit('playerInput', input);
    }
  }
  
  // TODO: Register event listeners
  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }
}

export default new GameClient();