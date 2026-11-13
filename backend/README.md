# Backend Server

Backend server for the Multiplayer Dino Runner game.

## Tech Stack
- Node.js
- Express
- Socket.IO

## Setup

```bash
cd backend
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## API Endpoints

### Socket.IO Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `joinRoom` | Client → Server | Join a game room |
| `leaveRoom` | Client → Server | Leave current room |
| `startGame` | Client → Server | Start the game |
| `playerInput` | Client → Server | Player movement/jump input |
| `gameState` | Server → Client | Broadcast game state |
| `playerUpdate` | Server → Client | Broadcast player positions |