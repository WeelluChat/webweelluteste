'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fe99163711a2dafad6213b51610cdbdd",
"assets/assets/icons/appli.svg": "1d0953625ff5262be24be3b67d89aaa6",
"assets/assets/icons/arrow_down.svg": "9d32f71424c93b328477e105e731d596",
"assets/assets/icons/calendar.svg": "fcf9dd50b4c3a777a363f9b2fcbb55f0",
"assets/assets/icons/group.svg": "f68e563239a056ff89b5f1387537703e",
"assets/assets/icons/log_out.svg": "3dc4faad67ebd983f5a03dd538d0ea9e",
"assets/assets/icons/megaphone_83808.svg": "e8bcaa86e54f19414cfae09cf78db745",
"assets/assets/icons/msg.svg": "5f54634f40aee2097f606bf19a1c98d2",
"assets/assets/icons/notif.svg": "fa0144fea4ec5447016187b05bc6aba2",
"assets/assets/icons/record.svg": "ad17c19ea765a1df249bcc81353ca16b",
"assets/assets/icons/setting.svg": "a4f05de3edf401028fd63ed289a0cba9",
"assets/assets/icons/user.svg": "8eeddc3e58e965d38393456d95264525",
"assets/assets/icons/write.svg": "47f876d9b4d2baac5d7d815a1270dd92",
"assets/assets/images/5.png": "542b3f26877d2fee63c8f37c0446f146",
"assets/assets/images/6.png": "216b682ada2c30a2a0263de9d7497c4d",
"assets/assets/images/bg1.png": "afcb5c07b04c3350afc4db20535f60a1",
"assets/assets/images/Dog_1.png": "12f21d9de6366cd0312b3ad05544dbff",
"assets/assets/images/Dog_2.png": "150031cde8bcefd5fdda5159ee0d8500",
"assets/assets/images/Dog_3.png": "ec5aff712966fafdb1ae9a8980a45339",
"assets/assets/images/Dog_4.png": "0fa8529e39f7a7cedf03d24ca04c9067",
"assets/assets/images/pattern(1).png": "870cbd92ba2a7a1cfbd6d60d38b157b8",
"assets/assets/images/pattern(2).png": "eaaa1f8459e9a30b9baa838140aaf34c",
"assets/assets/images/pattern-01.png": "74451fb6122255b0b0d3ef9134d82245",
"assets/assets/images/pattern-02.png": "22e73150983615a506dd67b46217dccb",
"assets/assets/images/pattern-03.png": "a28cc19e97a2c06287b09016acb434dd",
"assets/assets/images/pattern-04.png": "4c5101b53e037a627d65097aa5e29e98",
"assets/assets/images/pattern-05.png": "0cefd4c565f4b25f549e3f5f0208dcc2",
"assets/assets/images/pattern-06.png": "6a9c92e996c9716b62496fc641bb5450",
"assets/assets/images/pattern-07.png": "9cf2ac95a768bf154ebf541a3f46310a",
"assets/assets/images/pattern-08.png": "09a66240228bffc608c2da4637dcb625",
"assets/assets/images/pattern-09.png": "8189a57b553932a919aa4e8f041df49b",
"assets/assets/images/pattern0.png": "2a738526feeda259a58a79b64a9484a0",
"assets/assets/images/png-transparent-minecraft-sonic-mania-pixel-art-sonic-the-hedgehog-cartoon-character-pixel-art-game-text-sonic-the-hedgehog.png": "7eab3558be2e79706baf66b563aa727c",
"assets/assets/images/profil.png": "bac5846a4d5444e7f276b42e488d2a48",
"assets/assets/images/profil1.png": "7ec72bffd6bd67d1feee85950dbe5f98",
"assets/assets/images/profil2.png": "c961125d1f39ad479db49fa5be45b726",
"assets/assets/images/profil3.png": "233830217c71d26c2046d8b5edff2cec",
"assets/assets/images/profil4.png": "8261ca7bfb947e4eb5168bb552bcc6f1",
"assets/assets/images/safdaf.png": "0bc217d51e92d00f24f3600bb951983d",
"assets/FontManifest.json": "1a6184c6ca656e8be25d25329c87e502",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4744d614701427ac99c20472990a8ff3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50afece2c9f1f5e7122ae5e5e8589bb0",
"/": "50afece2c9f1f5e7122ae5e5e8589bb0",
"main.dart.js": "3f329b924b9080ae2842a5475296a97c",
"manifest.json": "93d3905bd56dcec6b0b6d09b970a4db9",
"version.json": "3cdf03e4af8aaf2f48f4e21551e2d01e"
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
