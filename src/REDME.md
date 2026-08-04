## 🗂️ Project Structure
src
│
├── components
│   └── Navbar.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   └── Signup.jsx


# RouteFlow

A modern, interactive React application demonstrating **React Router DOM** with four main routes: Home, Dashboard, Login, and Signup. Built with clean architecture, smooth page transitions, and a polished UI.

##  Features

- **4 Main Routes**: Home, Dashboard, Login, Signup
- **Smooth Page Transitions**: Fade, slide, scale, and blur animations
- **Staggered Content Reveal**: Cards and lists animate in sequence
- **Interactive Hover Effects**: Card lifts, button presses, link underlines
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Accessible**: Respects `prefers-reduced-motion` for users with motion sensitivity
- **Lucide Icons**: Clean, consistent iconography throughout
##  Installatio

# Install dependencies
npm install

# Start the development server
npm run dev

The app will be available at `http://localhost:5173` (or your Vite default port).

##  Animation System

All animations are defined in `src/index.css` using pure CSS keyframes — no extra dependencies required.

### Micro-interactions

### Example Usage

// Staggered cards
<div className="stagger-children grid grid-cols-3 gap-4">
  <div className="hover-lift">Card 1</div>
  <div className="hover-lift">Card 2</div>
  <div className="hover-lift">Card 3</div>
</div>


##  Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

##  Key Learnings

1. **React Router DOM** enables SPA navigation without page reloads
2. **NavLink** automatically applies active styles to the current route
3. **CSS keyframe animations** provide smooth page transitions without heavy libraries
4. **Staggered animations** create a premium, polished feel for lists and grids
5. **Accessibility** matters — always respect `prefers-reduced-motion`

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

# React Router Assignment

This project is made using React and React Router.

Pages:
- Home
- Login
- Signup
- Dashboard

How to run

1. npm install
2. npm run dev

Technologies Used

- React
- React Router DOM
- Vite
