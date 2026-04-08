const CACHE_ADI = "kaza-namazi-takip-v4";
const CACHE_DOSYALARI = [
  "./",
  "./index.html",
  "./privacy.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/flags/tr.svg",
  "./icons/flags/id.svg",
  "./icons/flags/gb.svg",
  "./icons/flags/sa.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_ADI).then((cache) => {
      return cache.addAll(CACHE_DOSYALARI);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((anahtarlar) =>
      Promise.all(
        anahtarlar.map((anahtar) => {
          if (anahtar !== CACHE_ADI) {
            return caches.delete(anahtar);
          }
          return Promise.resolve();
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
