/* 🔒 PROPRIETARY OFFLINE ENGINE v3.0 | OPERATOR: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'ibrahim-secops-cache-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/logo-main.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/banner.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/google-icon.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/pillar-01.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/pillar-02.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/pillar-03.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/pillar-04.png',
  'https://raw.githubusercontent.com/ibrahim-secops/secops-assets/main/pillar-05.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});
