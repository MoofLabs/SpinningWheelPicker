const CACHE_NAME = 'spinning-wheel-v2';
const urlsToCache = [
  '/SpinningWheelPicker/',
  '/SpinningWheelPicker/index.html',
  '/SpinningWheelPicker/icons/icon-192.png',
  '/SpinningWheelPicker/icons/icon-512.png',
  '/SpinningWheelPicker/icons/icon-180.png'
];

// Install: cache files and take over immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate: delete old caches and claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network first, fall back to cache for offline support
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
