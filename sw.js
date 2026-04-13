self.addEventListener("install", event => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker active");
});

self.addEventListener("fetch", event => {
  // Let the browser handle requests normally
});