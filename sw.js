self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("work-app-cache").then((cache) => {
            return cache.addAll([
                "Когда работать.html",
                "manifest.json"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
