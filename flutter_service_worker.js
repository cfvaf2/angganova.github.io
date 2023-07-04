'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "41887b13af86320d0089f0d48237399d",
"index.html": "4857f5400f16001edfe42e89dfb7f563",
"/": "4857f5400f16001edfe42e89dfb7f563",
"firebase-messaging-sw.js": "e5dae4851c17a92ce9fc64b99143c568",
"main.dart.js": "83ad66765046ad765ba3a6384f6fc07a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "d776994a391420d7e43ffaf17c48e4bb",
"icons/favicon-16x16.png": "d776994a391420d7e43ffaf17c48e4bb",
"icons/favicon.ico": "47a9714e2a47370d3c8e531c531c0ee9",
"icons/apple-icon.png": "dffd617646be07cdcd902739758b9dae",
"icons/apple-icon-144x144.png": "c4e8b27eff1b8ecde43d7ccede2d1b2a",
"icons/android-icon-192x192.png": "da532c546441fe323f5501529ad0d83e",
"icons/apple-icon-precomposed.png": "dffd617646be07cdcd902739758b9dae",
"icons/apple-icon-114x114.png": "17f08090aac21fd0d6aaf8245cb2380c",
"icons/ms-icon-310x310.png": "0770e007f504571d86f1305a571df20f",
"icons/ms-icon-144x144.png": "c4e8b27eff1b8ecde43d7ccede2d1b2a",
"icons/apple-icon-57x57.png": "2ffd681d9556c47b502903893c8a32a9",
"icons/apple-icon-152x152.png": "7758f3a305a5bf84ed720557081ece30",
"icons/ms-icon-150x150.png": "d3f6bb1329ecbe6035e6c022baf60384",
"icons/android-icon-72x72.png": "5de0eda8321cf798bc973641b5b2009f",
"icons/android-icon-96x96.png": "f9fdd910c522c81336ae33c46532fe31",
"icons/android-icon-36x36.png": "0ffc7db84c3be86b769f6c09773a3330",
"icons/apple-icon-180x180.png": "2159a3e11df31db46efc57a1a8f76cf0",
"icons/favicon-96x96.png": "f9fdd910c522c81336ae33c46532fe31",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "dd0924fcc3f00483e9aed8f8d5f2a619",
"icons/apple-icon-76x76.png": "214080dcff3d8c3314d6e726a76a5e5c",
"icons/apple-icon-60x60.png": "ef331e7be25861184d97822a2be9c53d",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "c4e8b27eff1b8ecde43d7ccede2d1b2a",
"icons/apple-icon-72x72.png": "5de0eda8321cf798bc973641b5b2009f",
"icons/apple-icon-120x120.png": "0f032d7b027cf39083174b936e50b1dd",
"icons/favicon-32x32.png": "145aede2da61eae5347628ad218982bf",
"icons/ms-icon-70x70.png": "037841fc5dcc5b22b509f5af90c1946b",
"manifest.json": "cfc4cbd3e7ca0fc383db60335a3183c3",
"assets/AssetManifest.json": "d54d72d124c3118d22217bb2bab5e513",
"assets/NOTICES": "077d5b4b71de4588ebc824bc23afa3a0",
"assets/FontManifest.json": "7b933673b25b4d7a9617e2b5c032e030",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/no_message.png": "99690828a393e2e72b3d75d8415b0acf",
"assets/assets/images/no_image.png": "a77cfd57248cb7c4439935d1d0939166",
"assets/assets/images/app_logo.png": "da532c546441fe323f5501529ad0d83e",
"assets/assets/images/splash_bg.png": "48dd248ddc55188c1fc437e168a3260e",
"assets/assets/json/sample/resume_sample.json": "94972bcf54736230adfc5490554fb49c",
"assets/assets/json/sample/skill_sample.json": "21d2817ffc02459d18b3bd45797f81c7",
"assets/assets/json/sample/challenge_sample.json": "61a01ba0543ff14dd869674a26b62953",
"assets/assets/json/lottie/maintenance.json": "8bc7dd2459565cff5d3238dccd8faf2a",
"assets/assets/json/lottie/loading.json": "fbf8da3d6b7b1ec42c001d1257455310",
"assets/assets/json/lottie/no_data.json": "db2c399ec770ea6069001915c923274f",
"assets/assets/json/lottie/login.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/assets/json/lottie/not_found.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"assets/assets/fonts/AppIcons.ttf": "ed73c4973a70d52d558fd2903ab8d1e3",
"assets/assets/fonts/OpenSans-Italic.ttf": "90f74e681980c2ef280a3d24006e5b35",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "8fd58ae86936600201df265f1112a014",
"assets/assets/fonts/OpenSans-Bold.ttf": "ff615c954fc5485fb3757516721b41ff",
"assets/assets/fonts/OpenSans-Regular.ttf": "58b1f440729d267697bddcddb994bce9",
"assets/assets/fonts/Plain-Regular.otf": "655ca97a529d09bf0f17341fd1c76298",
"assets/assets/fonts/Whitman-Display-Condensed-Regular.otf": "33bf2c273e170e43a73220d5aefac69a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
