# Team Guidelines

## Development Workflow

### Branch Strategy
- Use feature branches for all work
- Branch name format: `feature/description` or `bugfix/description`
- Create pull requests for code review

### Task Division
- **Backend (You)**: Handle server logic, game state, synchronization
- **Frontend (Friend)**: Handle rendering, UI, game visuals

## Communication Protocol

### Shared Constants
- Use `shared/consts.js` for all game constants
- Never hardcode values in separate files

### Type Definitions
- Use `shared/types.js` for event names and type constants
- Both clients and server use the same identifiers

### API Changes
- When adding new socket events, update both client and server
- Document new events in `API.md`

## Coding Standards

### JavaScript Style
- Use ES6+ features
- Use `const` and `let` (avoid `var`)
- Use arrow functions for callbacks
- Use template literals for strings

### Comments
- Add TODO comments for incomplete implementations
- Document public functions with JSDoc style

### File Organization
- Each class in its own file
- Group by functionality (game/, ui/, utils/)

## Testing

### Backend Testing
Start with: `npm run dev` (nodemon will auto-reload)

### Frontend Testing
Start with: `npm run dev` (Vite dev server)

## Deployment

### Backend
Deploy to: [Platform - to be decided]
Port: 3000

### Frontend
Deploy to: GitHub Pages or Vercel
Build: `npm run build`
Output: `/dist`

## Collaboration

### Git Commands

```bash
# Clone the repository
git clone https://github.com/yourusername/dino-multiplayer-racer.git
cd dino-multiplayer-racer

# Create a new branch
git checkout -b feature/my-feature-name

# Make changes and commit
git add .
git commit -m "Description of changes"

# Push to remote
git push origin feature/my-feature-name

# Create pull request
# Then create PR on GitHub
```

### Local Development Setup

```bash
# Terminal 1: Start backend
cd backend
npm install
npm run dev

# Terminal 2: Start frontend
cd frontend
npm install
npm run dev
```