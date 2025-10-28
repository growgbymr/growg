self.addEventListener('install', e=>{e.waitUntil(caches.open('growg-v22').then(c=>c.addAll(['/','/index.html'])));self.skipWaiting();});
self.addEventListener('activate', e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch', e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
