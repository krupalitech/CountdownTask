# Countdown Timer - React + Vite + MUI

A professional countdown timer application built with React, Vite, and Material-UI (MUI v5).

## Features

✨ **Core Features:**
- Input field to enter countdown time (in seconds)
- Start, Pause, Resume, and Reset controls
- Timer decreases every 1 second
- Display in MM:SS format
- Timer stops automatically at 00:00

🔒 **Validation:**
- Yup schema-based validation
- Real-time input validation
- Maximum time limit: 59:59 (3599 seconds)
- Clear error messages

🎨 **UI/UX:**
- Material Design UI with MUI v5
- Responsive design (mobile-friendly)
- Gradient background with modern styling
- Smooth transitions and animations
- Professional button designs with icons

⚙️ **Technical Highlights:**
- Modern React Hooks (useState, useEffect, useRef, useCallback)
- Optimized with useMemo and useCallback for performance
- Proper interval cleanup to prevent memory leaks
- Robust edge case handling

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/countdown-task.git
cd countdown-task

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel

#### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel
```

#### Option 2: Using Git (Recommended)
1. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/countdown-task.git
git branch -M main
git push -u origin main
```

2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

#### Option 3: Vercel Dashboard
1. Visit [Vercel Dashboard](https://vercel.app)
2. Click "Add New Project"
3. Import your Git repository
4. Project settings are auto-configured
5. Click "Deploy"

## Environment Variables

The project is configured with default settings. No environment variables are required for basic functionality.

## Project Structure

```
countdown-task/
├── src/
│   ├── pages/
│   │   └── CountdownTimer.jsx      # Main timer component
│   ├── components/
│   │   ├── CommonButton.jsx         # Reusable button component
│   │   └── CommonTextField.jsx      # Reusable input component
│   ├── App.jsx                      # Root app component
│   ├── App.css                      # Global styles
│   ├── index.css                    # Base styles
│   └── main.jsx                     # Entry point
├── package.json
├── vite.config.js
├── vercel.json                      # Vercel configuration
└── .vercelignore                    # Files to ignore in deployment
```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Dependencies

- **react@^18.2.0** - UI library
- **@mui/material@^5.14.0** - Material Design components
- **@mui/icons-material@^5.14.0** - Material icons
- **@emotion/react & @emotion/styled** - CSS-in-JS styling
- **yup@^1.7.1** - Form validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

✓ useCallback for memoized event handlers
✓ Proper cleanup of intervals to prevent memory leaks
✓ Efficient state management
✓ Optimized re-renders with React hooks

## Deployment Status

Once deployed to Vercel, you'll get a live URL like:
```
https://countdown-task.vercel.app
```

## License

MIT

## Author

Created with ❤️ using React + Vite + MUI

---

**Deployed on Vercel**: [Live Demo Link will appear here after deployment]