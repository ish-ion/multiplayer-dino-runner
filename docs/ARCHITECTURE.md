# Architecture Documentation

## System Overview

The Multiplayer Dino Runner game consists of two main components:
- **Backend Server**: Handles game state, player synchronization, and matchmaking
- **Frontend Client**: Renders the game and handles player input

## Network Architecture

```
┌─────────────────┐      Socket.IO      ┌─────────────────┐
│  Frontend Client │ ◄──────────────────► │  Backend Server │
│   (Phaser 4)    │                     │   (Node.js)     │
└─────────────────┘                     └─────────────────┘
```

## Communication Flow

1. **Connection**: Client connects to server via Socket.IO
2. **Lobby**: Players join room, wait for opponent
3. **Game Start**: Both players start racing
4. **Synchronization**: Server broadcasts game state, positions, obstacles
5. **Game End**: Winner determined, final scores sent

## Data Flow Diagram

```
Player Input → Client → Socket.IO → Server → Game Logic → Broadcast → Clients
```

## TODO: Add detailed API specification