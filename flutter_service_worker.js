'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2f34200e43e25dacd5d09d88f0ac6f95",
"assets/AssetManifest.json": "a1425ebf9ad5d71c1b75c4e3753c4fdb",
"assets/assets/AssetManifest.bin": "6303f91c8f2f13309df8b63feaa3251c",
"assets/assets/AssetManifest.json": "22c1580aa80ff96feabcd4e7d07f86e4",
"assets/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/assets/google_fonts/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/google_fonts/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/google_fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/google_fonts/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/google_fonts/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/google_fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/google_fonts/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/google_fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/google_fonts/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/google_fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/google_fonts/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/google_fonts/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/google_fonts/RobotoSlab-Black.ttf": "6472ad4c9147424f24f3e8a55b465917",
"assets/assets/google_fonts/RobotoSlab-Bold.ttf": "2c44adc1ebd36820fd75012412e6f550",
"assets/assets/google_fonts/RobotoSlab-ExtraBold.ttf": "38782544ee0ed1c813100e5539b0f469",
"assets/assets/google_fonts/RobotoSlab-ExtraLight.ttf": "626e627134876a88ac0c78b5ab4b011f",
"assets/assets/google_fonts/RobotoSlab-Light.ttf": "4c63608980b784c679bbadeb18d9acf4",
"assets/assets/google_fonts/RobotoSlab-Medium.ttf": "25a584c850368872045297c0792b06ea",
"assets/assets/google_fonts/RobotoSlab-Regular.ttf": "2100b4a02ebb94c0aa18cabd642ee507",
"assets/assets/google_fonts/RobotoSlab-SemiBold.ttf": "6d45e0660b0afedcada3169150a497e4",
"assets/assets/google_fonts/RobotoSlab-Thin.ttf": "16a0802d0b44dbd71bdf2d332db4d661",
"assets/assets/logo.webp": "3cd41ff5180fb704c0d1102551f36617",
"assets/assets/logoMant.png": "d47028128a449838b48a43db27341c36",
"assets/assets/logoMant512.png": "2506e292ee9cee10cf581078705dd9dd",
"assets/assets/logoMant960.png": "8d2d491ba25b9d2033e3f5fc7a6eeac8",
"assets/assets/no-image.jpg": "6d64484129f118b8ace2b6c3ef45cb6d",
"assets/assets/NOTICES": "278e0d8eea6402063aba352e968a6a48",
"assets/assets/placeholder-614.webp": "8cb68ce29961efecf98e5817deab584b",
"assets/assets/placeholder_cover.png": "a98102eca7902d0fa2e4508d6d6a55ec",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "047d5212317613695cc839a1aeaceb7f",
"assets/NOTICES": "278e0d8eea6402063aba352e968a6a48",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "700b8973fdb37c91dced3beb2ccef5ea",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logoMant192.png": "a71febc42f7ebcf90ba323a35228251c",
"icons/logoMant512.png": "2506e292ee9cee10cf581078705dd9dd",
"index.html": "1759af6c51c7fa4e3954f3449ff3a0cc",
"/": "1759af6c51c7fa4e3954f3449ff3a0cc",
"main.dart.js": "bc2660b660d2a1df77eaddebf16bed31",
"manifest.json": "4fd6afe154aaf22efc20f520e9e8a4e2",
"splash/img/dark-1x.png": "0c3045048bd34ce768e57834005842f3",
"splash/img/dark-2x.png": "8642a6aaf1e10989aebed84608e69b68",
"splash/img/dark-3x.png": "e64a604e4e3a416333f5b9ea4dbc3e66",
"splash/img/dark-4x.png": "e65a3b0c9901dcf6f2e367d6aa55306b",
"splash/img/light-1x.png": "0c3045048bd34ce768e57834005842f3",
"splash/img/light-2x.png": "8642a6aaf1e10989aebed84608e69b68",
"splash/img/light-3x.png": "e64a604e4e3a416333f5b9ea4dbc3e66",
"splash/img/light-4x.png": "e65a3b0c9901dcf6f2e367d6aa55306b",
"version.json": "9470906e31bb37b8ef2262bb723beaa5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
