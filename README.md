# 🎡 Spinning Wheel Picker

A lightweight, installable Progressive Web App for random selection. Built with vanilla JavaScript, HTML5 Canvas, and zero dependencies.

## 🌐 Live Demo

**[Launch App](https://mooflabs.github.io/SpinningWheelPicker/)**

*Tip: Add to your home screen for the full app experience!*

## ✨ Features

- **Customizable segments**: 2-20 configurable wheel segments
- **Color picker**: 8-color palette with intelligent color distribution
- **Dynamic text sizing**: Automatically scales text based on segment count and name length
- **Multi-line support**: Word wrapping for longer names with spaces
- **Sound effects**: Audio feedback with mute toggle
- **Keyboard controls**: Space bar to start/stop spinning
- **Responsive design**: Adapts to mobile and desktop screens
- **PWA support**: Installable on mobile devices, works offline
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
- Open `index.html` in a web browser

## 🎯 How It Works

### Winner Selection

The wheel uses canvas rotation and trigonometry to determine winners:

1. **Pointer Position**: Fixed at top center (270° in canvas coordinates)
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
- **Formula**: `velocity = initialVelocity × (1 - (1 - progress)³)`

Creates a natural spinning motion that gradually comes to rest.

### Text Rendering

- **Base sizing**: Scales with segment count (fewer segments = larger text)
- **Per-segment scaling**: Automatically reduces font size for long words
- **Word wrapping**: Splits multi-word names across lines at word boundaries
- **Vertical centering**: Multi-line text is centered within each segment

## 🎨 Customization

### Color Palette
Edit the `PALETTE` array for custom color picker options:
```javascript
const PALETTE = ['#E74C3C', '#3498DB', '#2ECC71', '#FFD700', ...];
```

Edit the `COLORS` array for default segment colors:
```javascript
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', ...];
```

### Spin Duration
Adjust deceleration time (default 4 seconds):
```javascript
if(t<4){  // Change 4 to desired seconds
```

### Background Gradient
Modify CSS variables in `:root`:
```css
--bg1: #6b21a8;  /* Purple */
--bg2: #ec4899;  /* Pink */
```

### Text Sizing
Adjust base font size multipliers in the `baseFont` calculation:
```javascript
let baseFont = r * (
  names.length <= 3 ? 0.12 :  // Adjust these values
  names.length <= 4 ? 0.10 :
  // ...
);
```

## 🛠️ Technical Highlights

- **Size**: 172 lines of code
- **Dependencies**: None
- **Browser compatibility**: Modern browsers with Canvas and Web Audio API support
- **Architecture**: Self-contained single HTML file with embedded CSS and JavaScript

## 📋 Usage

1. Open the app (browser or installed)
2. Enter number of segments (2-20)
3. Fill in names for each segment (Optional: Pick a Color for that Segment)
4. Click "Start Spinning" or press spacebar
5. Winner appears when wheel stops!


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

Free to use for personal projects. Attribution appreciated.

---

**Built using vanilla JavaScript • No frameworks, no build tools, no dependencies**

[View Source](https://github.com/MoofLabs/SpinningWheelPicker) • [Report Issue](https://github.com/MoofLabs/SpinningWheelPicker/issues) • [Live Demo](https://mooflabs.github.io/SpinningWheelPicker/)
