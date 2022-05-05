'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "375e8110a78faa4f34588b07be1f04a0",
"jssocials-theme-classic.css": "1bccbed81405dc07bc8fcfa9fc674b35",
"main.dart.js": "d8c9e2b06f7e35dd569fdd72b9c9e950",
"share.html": "b047bdf35fd1e2cd36f8cbb74aa92d77",
"font-awesome.min.css": "52e0947497241863100f97ca49093350",
"assets/config/app_config.json": "0aabe708e8752241a4f8fd6caeba604e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "05d67b52f0a04b9391a62664a8303b11",
"assets/assets/am.json": "270d7542413e38f97a8370304d8ff25e",
"assets/assets/reviewable.json": "f6a9dc9f12028e0b5f07aa62813dea29",
"assets/assets/e.json": "d6c459e7a08137dce3ea1e2eb082d504",
"assets/assets/au.json": "cc7fdba4b9c348f9b8af4f276a6a3768",
"assets/assets/as.json": "90abb5b1546373a1aceea1918a95f26d",
"assets/assets/places.json": "ac9fe21a05bf5bca89b1ecfc3df4c345",
"assets/assets/flutter_i18n/es.json": "356cdc4bbc8153b773694540ace3d86d",
"assets/assets/flutter_i18n/it.json": "d5232c11396eb6f3854b0e7fe86161a5",
"assets/assets/flutter_i18n/en.json": "acce2fc61e8f2d2c46b712a076758734",
"assets/assets/flutter_i18n/id.json": "647bf600ed9a23dfb2fdb6d74095d7b7",
"assets/assets/flutter_i18n/fr.json": "03e963edf25d3f21748746e94664438a",
"assets/assets/flutter_i18n/ja.json": "11407d47fcda1286d054636fbc6bf7f0",
"assets/assets/flutter_i18n/de.json": "9b760f86daf3699fab2ab04759746af2",
"assets/assets/addr.json": "7cf70a5212b7e8d1c0310b1ee4bf8fc7",
"assets/assets/placeholder640x480.jpg": "8184a42cfad772e3f265af520aefae94",
"assets/assets/placesId.json": "d4db962b9a91578a8f483863f14ab8c9",
"assets/AssetManifest.json": "1553c6196eb55b071677426c9c6a7a41",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"jssocials.css": "bb71c03ef2952ebb6e2f3733435b8cdf",
"icons/old_Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/old_Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"old_favicon.png": "5dcef449791fa27946b3d35ad8803796",
"jquery-3.5.1.min.js": "9ac39dc31635a363e377eda0f6fbe03f",
"index.html": "37e8505fac85950d3ff83edd6c4ecbd4",
"/": "37e8505fac85950d3ff83edd6c4ecbd4",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"base.css": "d41d8cd98f00b204e9800998ecf8427e",
"style.css": "fbd1463c8ebaf8de6571f6e07d9a446b",
"jssocials.min.js": "81b383b7ec040274c775b85a465e3a06",
"version.json": "195462decd52adf339aec3e6b3a29eb9",
"jssocials-theme-plain.css": "d435da0fe73e2cd36571fd9fdfde97fb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
