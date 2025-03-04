const CACHE_NAME = 'work-calendar-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',       // Добавьте CSS, если он есть
  './app.js',           // Добавьте JS, если он есть
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  ); // Добавлена закрывающая скобка
});
