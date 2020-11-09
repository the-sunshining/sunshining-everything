/*
 *
 *  The SunShining EveryThing
 
 */

const version = "0.0.1";
const cacheName = 'SunShining-${version}';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/thesunshining-everything/',
        '/thesunshining-everything/index.html',
        '/thesunshining-everything/sun_shortcuts/shortcut.html',
        '/thesunshining-everything/sun_shortcuts/img/Sun.png',
        '/thesunshining-everything/sun_shortcuts/img/SunBible.png',
        '/thesunshining-everything/sun_shortcuts/img/More.png'
])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});