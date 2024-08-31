// const CACHE_NAME = "syncron";
// const URL_TO_CACHE = [
//   "/src/app/layout.tsx",
//   "/src/app/(main)/layout.tsx",
//   "./github-mark-white.svg",
//   "./github-mark.svg",
//   "./google.svg",
//   "./undraw_no_data_re_kwbl.svg",
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((caches) => {
//       console.log("Opened caches: ");
//       return caches.addAll(URL_TO_CACHE);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }
//     })
//   );
// });
