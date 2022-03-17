'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "375e8110a78faa4f34588b07be1f04a0",
"jssocials-theme-classic.css": "1bccbed81405dc07bc8fcfa9fc674b35",
"main.dart.js": "7b184847435dda04df9c16d64bed2ab6",
"share.html": "b047bdf35fd1e2cd36f8cbb74aa92d77",
"font-awesome.min.css": "52e0947497241863100f97ca49093350",
"firebase.json": "9448a9ab3011b8a3ff1934c7def6d382",
"assets/config/app_config.json": "8363d45c6bdc221fabbaae6d967bef36",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a254e34c0ba27e35bed34209bb03cd4f",
"assets/assets/am.json": "5547f20dc4160942d52b613b022dc0db",
"assets/assets/e.json": "98f3d03f2d9bb5b49574a3efb12b523a",
"assets/assets/au.json": "61e4fbcaaca1e33faf542d7dfb7f777c",
"assets/assets/as.json": "2a93ad39deef97218e9c06e74bed9883",
"assets/assets/places.json": "8f58a655ab819a9e11dc7dca83531eed",
"assets/assets/flutter_i18n/es.json": "356cdc4bbc8153b773694540ace3d86d",
"assets/assets/flutter_i18n/it.json": "d5232c11396eb6f3854b0e7fe86161a5",
"assets/assets/flutter_i18n/en.json": "36071fdc81696d6a213658eebfe86328",
"assets/assets/flutter_i18n/id.json": "647bf600ed9a23dfb2fdb6d74095d7b7",
"assets/assets/flutter_i18n/fr.json": "03e963edf25d3f21748746e94664438a",
"assets/assets/flutter_i18n/ja.json": "11407d47fcda1286d054636fbc6bf7f0",
"assets/assets/flutter_i18n/de.json": "9b760f86daf3699fab2ab04759746af2",
"assets/assets/addr.json": "7cf70a5212b7e8d1c0310b1ee4bf8fc7",
"assets/assets/placeholder640x480.jpg": "8184a42cfad772e3f265af520aefae94",
"assets/assets/placesId.json": "01b6c408421fe19c150f24557a47c4d4",
"assets/AssetManifest.json": "514e436718492181092a40794fc0c482",
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
".firebase/hosting.cHVibGlj.cache": "7e0b3379b04f49aa96949bd7059703be",
"jssocials.css": "bb71c03ef2952ebb6e2f3733435b8cdf",
"icons/old_Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/old_Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"old_favicon.png": "5dcef449791fa27946b3d35ad8803796",
"jquery-3.5.1.min.js": "9ac39dc31635a363e377eda0f6fbe03f",
"index.html": "712ee8f6119e12db462be9eaa762fdcd",
"/": "712ee8f6119e12db462be9eaa762fdcd",
"public/manifest.json": "2249e5af1c6ddf5b637b5175bda8800d",
"public/android-chrome-192x192.png": "b2c4dd1d5e9854d0e4791fe382a5df0d",
"public/jssocials-theme-classic.css": "1bccbed81405dc07bc8fcfa9fc674b35",
"public/apple-touch-icon.png": "5a89893f20d9c681f59bd1bd640ecca0",
"public/apple-icon-152x152.png": "879d3edce78840f8d95544111b46c72d",
"public/mstile-150x150.png": "c8980a1ae48473f3b9d5b19a53905e7a",
"public/android-icon-192x192.png": "08f10e0730011fc108ac21d1afb0282b",
"public/main.dart.js": "075830491df16d82b99f7911cce67d02",
"public/apple-icon-180x180.png": "dc4320719a847e2b59cb19649aefd472",
"public/coinector1024x500.png": "1afaf32503834f19604c55943d6b3517",
"public/share.html": "b047bdf35fd1e2cd36f8cbb74aa92d77",
"public/ms-icon-70x70.png": "a44637196b49e467b4cb15b8c3d8be85",
"public/font-awesome.min.css": "52e0947497241863100f97ca49093350",
"public/android-icon-144x144.png": "9f06c85afe5d125117a7f984b6d42a13",
"public/android-icon-36x36.png": "f15a82a7f6db97c1022754106ab663ae",
"public/safari-pinned-tab.svg": "56be78194850fec06a596a57235a40de",
"public/android-icon-72x72.png": "ee8a8e4015e049592dd88b6c2da84453",
"public/apple-icon-120x120.png": "577b6b1ef3921455cd080cf51cbd5d53",
"public/android-icon-48x48.png": "4425ca1dc938d0e563a97a8cb39e85d2",
"public/coinector-web-app-3.8.0.zip": "176e29342777decab347cac2b2968d70",
"public/4.7.0font-awesome.min.css": "52e0947497241863100f97ca49093350",
"public/assets/config/app_config.json": "8363d45c6bdc221fabbaae6d967bef36",
"public/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"public/assets/NOTICES": "1d9399557dcbf12dd51d11daae382cc8",
"public/assets/assets/am.json": "c16669fcac17e04bd4bed905f38300a4",
"public/assets/assets/e-spa.json": "9965228a56da1a305778202ece6daab1",
"public/assets/assets/e.json": "319c8146f73e0b2abad67b75b5c4ecfd",
"public/assets/assets/am-ven.json": "aff808224e1171a54b318b7899215f6c",
"public/assets/assets/au.json": "9166a2eafce78c2e64ae304d64d0a52a",
"public/assets/assets/as.json": "c608ab7c356a5d6b0977642428a216ff",
"public/assets/assets/places.json": "c930ae8fec3f87aa5a66baa45c0a4c3f",
"public/assets/assets/am-ven-car.json": "074586f9830bd63abc87b2d822109ffa",
"public/assets/assets/as-jap.json": "d8424e540b54083ce0e731df54d3f881",
"public/assets/assets/flutter_i18n/es.json": "356cdc4bbc8153b773694540ace3d86d",
"public/assets/assets/flutter_i18n/it.json": "d5232c11396eb6f3854b0e7fe86161a5",
"public/assets/assets/flutter_i18n/en.json": "36071fdc81696d6a213658eebfe86328",
"public/assets/assets/flutter_i18n/id.json": "647bf600ed9a23dfb2fdb6d74095d7b7",
"public/assets/assets/flutter_i18n/fr.json": "03e963edf25d3f21748746e94664438a",
"public/assets/assets/flutter_i18n/ja.json": "11407d47fcda1286d054636fbc6bf7f0",
"public/assets/assets/flutter_i18n/de.json": "9b760f86daf3699fab2ab04759746af2",
"public/assets/assets/addr.json": "7cf70a5212b7e8d1c0310b1ee4bf8fc7",
"public/assets/assets/placeholder640x480.jpg": "8184a42cfad772e3f265af520aefae94",
"public/assets/assets/placesId.json": "01b6c408421fe19c150f24557a47c4d4",
"public/assets/AssetManifest.json": "321d7b3ba42d13cff34895d1001cc8d3",
"public/assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"public/assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"public/assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"public/assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"public/assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"public/assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"public/assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"public/assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"public/assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"public/assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"public/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"public/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"public/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"public/apple-icon-72x72.png": "ee8a8e4015e049592dd88b6c2da84453",
"public/apple-icon-76x76.png": "12ad13f2b0dcf39b37c72ed2db3d73a4",
"public/apple-icon-144x144.png": "9f06c85afe5d125117a7f984b6d42a13",
"public/apple-icon.png": "628823bd41cf74a8618fa1e6eeeb7211",
"public/favicon.png": "5b88fe05718babc62a15a563ee987623",
"public/jssocials.css": "bb71c03ef2952ebb6e2f3733435b8cdf",
"public/favicon.ico": "896550db45190494a41b28fed5673dc6",
"public/site.webmanifest": "b25bdc0f041fd7eda68617e7731511ae",
"public/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"public/favicon-96x96.png": "d1f5496ffd4e867c893cac01434d82e4",
"public/icons/old_Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"public/icons/Icon-512.png": "3bc50d38e4a66a38ae52d5286a943d6a",
"public/icons/old_Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"public/icons/Icon-192.png": "3bc50d38e4a66a38ae52d5286a943d6a",
"public/icons/Icon-250.png": "3bc50d38e4a66a38ae52d5286a943d6a",
"public/icons/coinector192x192.png": "575b393b58b8edb6292c36bcf05c9388",
"public/old_favicon.png": "5dcef449791fa27946b3d35ad8803796",
"public/jquery-3.5.1.min.js": "9ac39dc31635a363e377eda0f6fbe03f",
"public/apple-icon-60x60.png": "c7fa918c10bf6651e8b1cef4a5d3c1eb",
"public/ms-icon-150x150.png": "4ce3a04e0c2cfd5350e35813353e3712",
"public/index.html": "712ee8f6119e12db462be9eaa762fdcd",
"public/apple-icon-114x114.png": "30bff05471a65d3a8888ddafc43d4d53",
"public/ms-icon-310x310.png": "d96c21103734f7d0f5ed902bea6c5056",
"public/ms-icon-144x144.png": "9f06c85afe5d125117a7f984b6d42a13",
"public/canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"public/canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"public/canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"public/canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"public/favicon-16x16.png": "4ff56260fe50cd185361b9d5e9cd2e90",
"public/favicon-32x32.png": "b3c8a1deabe430d82215ec5576496c31",
"public/android-icon-96x96.png": "d1f5496ffd4e867c893cac01434d82e4",
"public/base.css": "d41d8cd98f00b204e9800998ecf8427e",
"public/apple-icon-precomposed.png": "628823bd41cf74a8618fa1e6eeeb7211",
"public/apple-icon-57x57.png": "b7ceb932861ad2d79e935131b3de50f3",
"public/style.css": "fbd1463c8ebaf8de6571f6e07d9a446b",
"public/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"public/jssocials.min.js": "81b383b7ec040274c775b85a465e3a06",
"public/version.json": "82cb5d0b02cfa43d753ca17d21a2e537",
"public/jssocials-theme-plain.css": "d435da0fe73e2cd36571fd9fdfde97fb",
"base.css": "d41d8cd98f00b204e9800998ecf8427e",
"style.css": "fbd1463c8ebaf8de6571f6e07d9a446b",
"jssocials.min.js": "81b383b7ec040274c775b85a465e3a06",
"version.json": "dfab011f5e80afe53e06cb0f306cdc05",
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
