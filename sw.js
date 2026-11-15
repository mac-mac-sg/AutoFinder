/* PHEV Atlas service worker: cache application shell, network-first updates. */
const VERSION='phev-atlas-v1-20261115';
const CORE=[
  './', './index.html', './manifest.webmanifest', './pwa.css', './pwa.js', './offline.html',
  './icons/favicon.svg','./icons/icon-192.png','./icons/icon-512.png',
  './icons/icon-maskable-512.png','./icons/apple-touch-icon.png'
];
self.addEventListener('install',(event)=>{
  event.waitUntil(caches.open(VERSION).then((cache)=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',(event)=>{
  event.waitUntil(Promise.all([
    caches.keys().then((names)=>Promise.all(names.filter(n=>n.startsWith('phev-atlas-v')&&n!==VERSION).map(n=>caches.delete(n)))),
    self.clients.claim()
  ]));
});
self.addEventListener('fetch',(event)=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return; // Remote vehicle photos remain online-only.
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then((response)=>{
      if(response.ok) {const copy=response.clone();event.waitUntil(caches.open(VERSION).then(c=>c.put('./index.html',copy)));}
      return response;
    }).catch(async()=>{
      const cache=await caches.open(VERSION);
      return await cache.match('./index.html') || await cache.match('./offline.html');
    }));
    return;
  }
  event.respondWith(caches.match(req).then((cached)=>cached || fetch(req).then((res)=>{
    if(res.ok){const clone=res.clone();event.waitUntil(caches.open(VERSION).then(c=>c.put(req,clone)));}
    return res;
  })));
});
