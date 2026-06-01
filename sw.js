// Service worker — instala como app + funciona offline (shell).
const CACHE = 'trip-v1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['./', './index.html'])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Só same-origin — Firebase, wsrv e Wikimedia passam direto pela rede.
  if (url.origin !== location.origin) return;

  // Navegação: network-first (sempre fresco online), cache offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Demais same-origin: cache-first.
  e.respondWith(caches.match(req).then(c => c || fetch(req)));
});
