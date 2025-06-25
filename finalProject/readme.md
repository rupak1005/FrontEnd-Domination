#  Smooth Scroll & Animation Project

An immersive web experience built with **Locomotive Scroll**, **GSAP**, **ScrollTrigger**, and **Shery.js**. This project features smooth scrolling, creative loaders, magnetic cursors, scroll-based animations, and interactive image effects.

---

##  Features

*  Smooth scrolling with parallax using **Locomotive Scroll**
*  Scroll-based animations powered by **GSAP** and **ScrollTrigger**
*  Interactive image distortion effects with **Shery.js**
*  Custom magnetic cursor with fluid motion
*  Loader with animated text and transition
*  Video hover interactions
*  Floating flag element that follows the cursor
*  Animated footer text on scroll

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smooth-scroll-animation.git
cd smooth-scroll-animation
```

### 2. Install Dependencies

```bash
npm install locomotive-scroll@beta gsap sheryjs
```

### 3. Open `index.html` in the browser

Or serve locally using a live server extension or `vite`.

---

##  Folder Structure

```
smooth-scroll-animation/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── locomotive.js
│   ├── loader.js
│   ├── cursor.js
│   ├── shery.js
│   ├── flag.js
│   └── footer.js
├── images/
├── videos/
└── README.md
```

---

##  Technologies Used

| Library              | Purpose                           |
| -------------------- | --------------------------------- |
| Locomotive Scroll v5 | Smooth scrolling & parallax       |
| GSAP                 | High-performance animations       |
| ScrollTrigger        | Scroll-based triggers with GSAP   |
| Shery.js             | Image distortion & cursor effects |

---

##  Usage Tips

*  Adjust loader timing inside `loadingAnimation()`.
*  Modify Shery.js effects in `sheryAnimation()`.
*  Customize cursor interactions in `cursorAnimation()`.

---

##  Best Practices

* Use `will-change: transform` for better animation performance.
* Optimize images for faster load times.
* Respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

---

##  License

MIT License — Free to use, modify, and distribute.

---

##  Author

* **Rupak kumar**
* GitHub: [@rupak1005](https://github.com/rupak1005)
