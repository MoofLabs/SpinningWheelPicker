# 🎡 Spinning Wheel Picker

A lightweight, installable Progressive Web App for random selection. Built with vanilla JavaScript, HTML5 Canvas, and zero dependencies.

## 🌐 Live Demo

**[Launch App](https://mooflabs.github.io/SpinningWheelPicker/)**

*Tip: Add to your home screen for the full app experience!*

## ✨ Features

- **Progressive Web App** - Install to home screen, works offline
- **Pure Vanilla JS** - No frameworks, libraries, or dependencies
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Physics** - Realistic easing with cubic deceleration curve
- **Keyboard Support** - Spacebar to start/stop spinning
- **Dynamic Configuration** - Support for 2-20 segments with scrollable input
- **Randomized Spins** - Variable velocity for authentic feel
- **Offline First** - Service worker caches everything after first visit

## 📱 Install as an App

### iOS (iPhone/iPad)
1. Open the [live demo](https://mooflabs.github.io/SpinningWheelPicker/) in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Enjoy fullscreen app experience!

### Android
1. Open the [live demo](https://mooflabs.github.io/SpinningWheelPicker/) in Chrome
2. Tap "Install" banner or menu → "Install app"
3. App icon appears on home screen

### Desktop
- Chrome/Edge will show an install button in the address bar
- Works in browser without installation too

## 🎯 How It Works

### The Math Behind Winner Selection

The wheel uses canvas rotation and trigonometry to determine winners:

1. **Pointer Position**: Fixed at 12 o'clock (270° in canvas coordinates)
2. **Segment Calculation**: Each segment occupies `360° / numSegments`
3. **Winner Algorithm**:
   ```javascript
   // Normalize wheel rotation (0-360°)
   const normalizedRotation = ((rotation % 360) + 360) % 360;
   
   // Calculate pointer's relative position
   const relative = ((270 - normalizedRotation) + 360) % 360;
   
   // Determine winning segment
   const winnerIndex = Math.floor(relative / segmentAngle) % numSegments;
   ```

### Animation Physics

- **Acceleration**: Random initial velocity (20-40 units)
- **Deceleration**: 4-second ease-out cubic function
- **Formula**: `velocity = initialVelocity × (1 - progress³)`

This creates a natural spinning sensation that gradually comes to rest.

## 🛠️ Technical Highlights

- **File Size**: ~10KB (HTML + CSS + JS combined)
- **Lines of Code**: ~200 (excluding service worker)
- **Canvas API**: Dynamic rendering with proper text wrapping
- **Service Worker**: Cache-first strategy for instant loading
- **Manifest**: Full PWA configuration for installability
- **Color Palette**: 8 distinct colors with automatic cycling

## 📋 Usage

1. Open the app (browser or installed)
2. Enter number of segments (2-20)
3. Fill in names for each segment
4. Click "Start Spinning" or press spacebar
5. Winner appears when wheel stops!

## ⌨️ Keyboard Navigation

- **Enter Key**: Advance to next field (auto-scrolls on mobile)
- **Spacebar**: Start/stop wheel spinning (when wheel is visible)
- **Tab**: Navigate between fields (desktop)
- **Last Field + Enter**: Creates wheel if all names are filled

*Tip: On mobile, fields automatically scroll into view as you navigate for easier input with 10+ segments.*

## 🎨 Customization

### Colors
Edit the `COLORS` array to change segment colors:
```javascript
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', ...];
```

### Spin Duration
Adjust deceleration time (default 4 seconds):
```javascript
const d = 4; // Change to desired seconds
```

### Background Gradient
Modify CSS variables in `:root`:
```css
--bg1: #6b21a8;  /* Purple */
--bg2: #ec4899;  /* Pink */
```

## 🏗️ Architecture

```
SpinningWheelPicker/
├── index.html          # Main app (HTML, CSS, JS in one file)
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline caching logic
└── icons/              # App icons (192px, 512px, 180px)
```

## 🧪 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+ (iOS & macOS)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

Requires Canvas API, Service Workers, and requestAnimationFrame support.

## 🚀 Deployment

Hosted on **GitHub Pages** with automatic HTTPS and global CDN.

To deploy your own:
1. Fork this repo
2. Enable GitHub Pages in Settings → Pages
3. Select `main` branch
4. Access at `https://yourusername.github.io/SpinningWheelPicker/`

## 📝 Development

Built with modern web standards:
- **ES6+ JavaScript** - Arrow functions, template literals, destructuring
- **HTML5 Canvas** - 2D rendering context for wheel graphics
- **CSS3** - Flexbox, gradients, transitions
- **Service Workers** - Cache API for offline functionality
- **Web App Manifest** - Installability metadata

## 🎓 Learning Resources

This project demonstrates:
- Canvas animation and drawing
- Trigonometry for circular layouts
- Service worker lifecycle
- PWA best practices
- Event handling (keyboard, mouse, touch)
- Responsive design patterns

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated.

---

**Built using vanilla JavaScript • No frameworks, no build tools, no dependencies**

[View Source](https://github.com/MoofLabs/SpinningWheelPicker) • [Report Issue](https://github.com/MoofLabs/SpinningWheelPicker/issues) • [Live Demo](https://mooflabs.github.io/SpinningWheelPicker/)
