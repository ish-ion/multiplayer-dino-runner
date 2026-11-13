# Multiplayer Dino Runner

A browser-based multiplayer dinosaur runner game where two players race against each other, dodging obstacles to see who runs the farthest.

## Game Concept

Two dinosaurs compete in a side-scrolling race through an endless obstacle course. Players must avoid obstacles while maintaining their speed. The one who survives the longest wins!

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Phaser 4 + Vite |
| **Backend** | Node.js + Express + Socket.IO |
| **Networking** | WebSocket (Socket.IO) |

## Project Structure

```
dino-multiplayer-racer/
├── backend/                 # Server-side code
│   ├── src/
│   │   ├── server.js        # Socket.IO server entry
│   │   ├── game/            # Game logic classes
│   │   └── utils/           # Utility functions
│   └── package.json
│
├── frontend/                # Client-side code
│   ├── src/
│   │   ├── scenes/          # Phaser game scenes
│   │   ├── ui/              # UI components
│   │   └── game/            # Game initialization
│   ├── index.html
│   └── package.json
│
├── shared/                  # Code shared between client and server
│   ├── consts.js            # Game constants
│   └── types.js             # Type definitions
│
├── docs/                    # Documentation
│   ├── ARCHITECTURE.md
│   └── TEAM_GUIDELINES.md
│
└── docker-compose.yml       # Local development setup
```

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm

### Quick Start

1. Clone the repository
2. Start backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. Start frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser

## Team Roles

- **Backend Developer**: Server logic, game state, synchronization
- **Frontend Developer**: Game rendering, UI, animations

## Gameplay Features

- [ ] Two dinosaur characters
- [ ] Obstacle avoidance (cacti, pterodactyls, etc.)
- [ ] Multiplayer via WebSockets
- [ ] Race mode (competitive)
- [ ] Score tracking and winner display

## Contributing

See `docs/TEAM_GUIDELINES.md` for development guidelines.

## License

TODO: Add license

## Acknowledgments

- Inspired by the Chrome Dino Runner game
- Built with [Phaser 4](https://phaser.io/) and [Socket.IO](https://socket.io/)