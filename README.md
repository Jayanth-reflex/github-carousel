# GitHub Carousel

A visually stunning, interactive 3D carousel to showcase your top GitHub repositories. Built with React, Vite, and SCSS, this project is perfect for making your portfolio stand out to recruiters, collaborators, and visitors.

---

## 🚀 Features
- **3D Rotating Carousel:** Showcases up to 8 of your public GitHub repositories in a 3D animated carousel.
- **Modern Stack:** Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and SCSS for fast, modern development.
- **Responsive & Interactive:** Fully responsive, with smooth 3D animation and pause-on-hover.
- **Clickable Cards:** Each card links directly to the corresponding GitHub repository.
- **Random Card Images:** Each card displays a random image for visual diversity.
- **Professional Styling:** Clean, modern, and accessible design.

---

## 📦 Project Structure

```
/ (root)
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Carousel.jsx
│       └── Carousel.scss
└── ...
```

- **src/components/Carousel.jsx**: Main carousel logic and rendering.
- **src/components/Carousel.scss**: 3D animation, card, and carousel styles.
- **src/App.jsx**: App entry, layout, and integration.

---

## 🛠️ Setup & Development

1. **Clone the repo:**
   ```sh
   git clone https://github.com/Jayanth-reflex/github-carousel.git
   cd github-carousel
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start local dev server:**
   ```sh
   npm run dev
   ```
4. **Build for production:**
   ```sh
   npm run build
   ```
5. **Deploy to GitHub Pages:**
   - Ensure `vite.config.js` has `base: '/github-carousel/'`
   - Run:
     ```sh
     npm run deploy
     ```
   - Live at: [https://jayanth-reflex.github.io/github-carousel/](https://jayanth-reflex.github.io/github-carousel/)

---

## 📚 Documentation

- **How it works:**
  - Fetches your public repositories from the GitHub API: `https://api.github.com/users/<username>/repos`
  - Displays up to 8 repos as cards in a rotating 3D carousel.
  - Each card shows a random image, repo name, and description.
  - Both the image and repo name are clickable, opening the repo in a new tab.
  - Responsive and interactive: hover effects, animated rotation, and pause-on-hover.

- **Customization:**
  - Change the GitHub username in `Carousel.jsx` (`GITHUB_USER` constant).
  - Adjust card count, styles, or animation in `Carousel.scss`.

---

## 📎 Credits & Source

- **Original 3D Carousel CSS Inspiration:**  
  [@Jayanth-Reddy-the-reactor on CodePen](https://codepen.io/Jayanth-Reddy-the-reactor/pen/ZYbQyjZ)
- **Project Author:** [Jayanth-reflex](https://github.com/Jayanth-reflex)

---

## 🤝 Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License. 