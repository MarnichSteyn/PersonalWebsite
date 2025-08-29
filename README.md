# Project 1 - Personal Website (Front-End Only) 

A Personal website built using React.js in a Vite app, featuring a profile, education, experience, and blog sections with authentication and a responive design. When loggedn in it is possible to edit the side bar aswell as adding and removing blog posts.

## Instructions

### Install dependencies
```bash
make install
```

### Run development server
```bash
make dev
```

### Build for production
```bash
make build
```

### Preview production build
```bash
make preview
```

## File Layout

```
public/                # Static assets
src/
  assets/              # Images and other assets
  components/          # Reusable React components
  context/             # React context providers
  pages/               # Main page components (Blog, Education, etc.)
  styles/              # CSS files for styling
  App.jsx              # Main app component
  main.jsx             # Entry point
index.html             # Main HTML file
package.json           # Project metadata and scripts
vite.config.js         # Vite configuration
Makefile               # Makefile for build/dev commands
README.md              # Project instructions
```

## AI Usage
Used AI to create fake blog posts as examples

## Citations
https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/ Used for learning how to incorporate localStorage to make items persist after refreshing.

