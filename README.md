# Spinning Wheel Picker

A simple random name picker that spins a wheel to choose a winner. Runs entirely in the browser with no dependencies -- just one HTML file with embedded CSS and JavaScript.

**[Try it here](https://mooflabs.github.io/SpinningWheelPicker/)**

## What it does

- Create a wheel with 2-20 named segments
- Optionally pick a color for each segment
- Press Spin and it picks a winner at random
- Installable as a PWA on phones and tablets

## How the randomness works

The winner is chosen the instant you press Spin, before the wheel even starts moving. The animation is just for show -- it calculates exactly where to land and spins to that spot.

Under the hood it uses `crypto.getRandomValues()` instead of `Math.random()`, which gives cryptographically strong randomness. Every segment has an equal chance of being selected, and there's no way to influence the outcome by timing a "stop" button.

The spin duration, number of rotations, and landing position within the winning segment are all independently randomized so the animation looks different every time.

## How to use it

1. Open the app in a browser or install it on your phone
2. Enter how many segments you want (2-20)
3. Type a name for each segment, optionally pick colors
4. Hit Spin or press the spacebar
5. Winner is displayed when the wheel stops

## Installing on your phone

**iOS**: Open the link in Safari, tap the Share button, tap "Add to Home Screen."

**Android**: Open the link in Chrome, tap the menu, tap "Install app."

It works offline after the first visit.

## Running locally

Just open `index.html` in a browser. No build step, no server, no dependencies.

## Technical details

- Single HTML file, ~170 lines of JavaScript
- HTML5 Canvas for rendering
- Web Audio API for tick sounds (with mute toggle)
- Service worker for offline caching
- Web App Manifest for installability

## License

Free to use. Attribution appreciated.
