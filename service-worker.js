const CACHE_STATIK = "ezan-vakti-statik-v5";
const CACHE_API = "ezan-vakti-api-v1";

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
    caches.open(CACHE_STATIK).then((cache) => cache.addAll(CACHE_DOSYALARI))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((anahtarlar) =>
      Promise.all(
        anahtarlar.map((anahtar) => {
          if (anahtar !== CACHE_STATIK && anahtar !== CACHE_API) {
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
  const url = event.request.url;

  if (url.includes("api.aladhan.com")) {
    event.respondWith(
      fetch(event.request)
        .then((yanit) => {
          if (yanit.ok) {
            const kopya = yanit.clone();
            caches.open(CACHE_API).then((cache) => cache.put(event.request, kopya));
          }
          return yanit;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
