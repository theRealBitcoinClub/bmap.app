'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0458507698ee903b3faba35904a97c05",
"index.html": "c7f9db6cdda81ca6550b967068af5204",
"/": "c7f9db6cdda81ca6550b967068af5204",
"jssocials-theme-plain.css": "5ee9d7623ad0c2a3ed195d102a7e573a",
"bitcoinmap_es.html": "908d6da151a3ebb65acfd95421da220a",
"main.dart.js": "6aeb0566d5152d0d21b3738b6842329b",
"old_favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"charts.js": "beb2a4be5a45038bc554feb30f353e7f",
"jquery-3.5.1.min.js": "12b69d0ae6c6f0c42942ae6da2896e84",
"bitcoinmap.html": "3e86672e800f81babdcad35a2ab7b200",
"jssocials.css": "34c0a3f580b60afc46265539329a249a",
"icons/old_Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/old_Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"style.css": "982a4cdccca51757c452e67f2ac52c4d",
"manifest.json": "2249e5af1c6ddf5b637b5175bda8800d",
"jssocials-theme-classic.css": "e870cb4d3804fe4f3a28c678e5162242",
"jssocials.min.js": "81b383b7ec040274c775b85a465e3a06",
"font-awesome.min.css": "52e0947497241863100f97ca49093350",
"bitcoinchartsogimage.png": "0a3719590d7517535f92009ae673008b",
"assets/config/app_config.json": "26032ba23d9e07a899e830f7eb4d2ce7",
"assets/AssetManifest.json": "0fcc44efc32702ca8ca865917ec26690",
"assets/NOTICES": "e99324314f6ecfa3ba2ba8260bef6b3b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/flutter_i18n/sl.json": "e73f1ad4feac30ae1d45cd09e5c98a50",
"assets/assets/flutter_i18n/ch.json": "0f66bd24a162deff6385a815e71d311c",
"assets/assets/flutter_i18n/ja.json": "2cefb974180098ec397dbede76af6a1b",
"assets/assets/flutter_i18n/de.json": "34647837607f37340aa68ec14750a16a",
"assets/assets/flutter_i18n/ru.json": "e3d1d463348f6ffd516ffa89cc809389",
"assets/assets/flutter_i18n/pt.json": "42d78763e155981df12a44f227bc616d",
"assets/assets/flutter_i18n/en.json": "4c48e9dce1988cb3f287416b86dfb30f",
"assets/assets/flutter_i18n/it.json": "877ec26a710dd760388a87e2cf3edf51",
"assets/assets/flutter_i18n/fr.json": "7794131967f986456761390ddf301b9f",
"assets/assets/flutter_i18n/hi.json": "5f7ee47a175970e3a54d35bcd05abfac",
"assets/assets/flutter_i18n/id.json": "99e021ae818f9067fa025574c9ed04a4",
"assets/assets/flutter_i18n/es.json": "a942dca16e869ee3a8945411adef7be3",
"assets/assets/flutter_i18n/ar.json": "95cba929fa2c98e958cea08fbb54bc2a",
"assets/assets/placeholder640x480.jpg": "8184a42cfad772e3f265af520aefae94",
"assets/assets/places.json": "e3ab820b69514e1002063d899abed952",
"assets/assets/addr.json": "da6ee8795a017b2c14acb470b03b8625",
"assets/assets/placesId.json": "d4db962b9a91578a8f483863f14ab8c9",
"assets/assets/au.json": "ba5fad2daf06ea653650df42653575c2",
"assets/assets/tags/tags_it.csv": "d962478e8cf07f8b9fc89bf93dba2e0b",
"assets/assets/tags/tags_sl.csv": "ecb396eb8041ca5e65a70f0ec5844547",
"assets/assets/tags/tags_de.csv": "3fb021892ba22af1cbd6e3705d050406",
"assets/assets/tags/tags_pt.csv": "c5212fa276d7413973025609e1e5c344",
"assets/assets/tags/tags_id.csv": "a645a16cc2fb0226180d30b76bc0014a",
"assets/assets/tags/tags_es.csv": "57b8f1e127c9c3c6f0f0d2f70a60c175",
"assets/assets/tags/tags_ch.csv": "5c996c27c076ab3472771f504fe7f652",
"assets/assets/tags/tags_ar.csv": "11ec2ebe0f74767743b1cc630e377440",
"assets/assets/tags/tags_fr.csv": "989f5cf5d766e77334583213da4ac59e",
"assets/assets/tags/tags_ru.csv": "727f7560dbc2e7c304cf1beacf53fa00",
"assets/assets/tags/tags_en.csv": "78af8f67586c7dc6f8091c7d38b0f85f",
"assets/assets/tags/tags_hi.csv": "18768a7ee5c79ed9dfa42bfae5c1eaae",
"assets/assets/tags/tags_ja.csv": "2e2c12e4b5d7dc174f0777a32b6d0251",
"assets/assets/tags/emoji.csv": "dab86c05769dfd9b3ed288a419693567",
"assets/assets/e.json": "deb3bc4dff2166221a609da7b51c9fce",
"assets/assets/am.json": "b3454852468182a328764d6d0f699d6c",
"assets/assets/as.json": "1ee7077f3b291ad088bb221478c4219d",
"assets/assets/marker/sdadsadsa.png": "f511f0078dc9bee713175aeae7e5cc9f",
"assets/assets/marker/bar-sm.png": "c48737176073c55ad4ef6f51dc86133b",
"assets/assets/marker/hotel.png": "8bcbacd56e9273a88e74ece490ff0e1b",
"assets/assets/marker/shop-sm.png": "2e1dc760e181dd825fb6c78891dff151",
"assets/assets/marker/market-md.png": "d0bc6b35790224025521d0a1df3a74ba",
"assets/assets/marker/spa-md.png": "6b01675810dca3b9fd27b6e1aa889133",
"assets/assets/marker/takeaway-sm.png": "614d3447a9d29d954f8363a22a8cd55c",
"assets/assets/marker/2ic_map_shop.png": "d0bc6b35790224025521d0a1df3a74ba",
"assets/assets/marker/shop.png": "cd436a6d644673a145d78132128290da",
"assets/assets/marker/hotel-md.png": "4f40440b8138d8926364a4f406647794",
"assets/assets/marker/restaurant.png": "88fbe97730fe3f13bf4782d0bd00471d",
"assets/assets/marker/restaurant-sm.png": "00eb7a2446a90417523406d7cbd039f4",
"assets/assets/marker/spa.png": "e202490625a63ac6ac0660c09e73da24",
"assets/assets/marker/shop-md.png": "8867d769317a54ae3eb8030d958bd30e",
"assets/assets/marker/bar-md.png": "9c0b624d689b8e09eb3e5aa263d6d788",
"assets/assets/marker/ic_map_shop.png": "a8ed1f4412d6b399ed6ef1cd604ad1ec",
"assets/assets/marker/restaurant-md.png": "12dcbc45a107b6f29ffbde06acab572b",
"assets/assets/marker/market.png": "f1af1860ecc2a467aff5956c54a0225c",
"assets/assets/marker/hotel-sm.png": "6d06edcf5926e91e262550f9a23368ee",
"assets/assets/marker/spa-sm.png": "01f1449aa3ba9fdc02cfbcf53071a373",
"assets/assets/marker/bar.png": "f511f0078dc9bee713175aeae7e5cc9f",
"assets/assets/marker/takeaway-md.png": "828e39188a4081ed9d6037e55f365b0f",
"assets/assets/marker/takeaway.png": "5d6cb5ead3c298ffa1201bbdf85daedd",
"assets/assets/marker/market-sm.png": "a8ed1f4412d6b399ed6ef1cd604ad1ec",
"share.html": "ebcb7e7abd7551735842c9aac1b2f8d0",
"base.css": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
