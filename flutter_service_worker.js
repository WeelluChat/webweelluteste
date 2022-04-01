'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e0c737741b1e99b0da32f2abeb123058",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb82a59cf230f02ae0408ce08f43b090",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b580c459fd6945bbf7cd11bd5e6ace4e",
".git/logs/refs/heads/main": "f21dded5127481276fbf367d97a75235",
".git/logs/refs/remotes/origin/main": "176af49f5f7bf069f50c691ee4dba042",
".git/objects/00/29de2d6845468c142ebafbf20400bab57e8f49": "a3f0ddc67fa3909174517e39f659ec2e",
".git/objects/01/b7d6e052cb8a2ef390573823b8b132a3742c81": "b675a7d3ac18ae7bd2d613e51d75919e",
".git/objects/02/36e18b6f29df6a9a94cf5c3d7a5285b8588b53": "4ddcc160e7ea573348d8259bf30f8704",
".git/objects/08/ba006422b6cbb018e6c85851e16abc23e97cb0": "9f64748f6925a9c0de548fdc592b2082",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/7adf930d6a5edf3966e4afa0954d72d21a8f16": "50b7b3462a4c361ecdc3eb4f60511fa5",
".git/objects/13/dd336ce9f0f37923ca0265899ea4aa15c826ca": "92c197244619f0440d80acedcac2d124",
".git/objects/18/4e9bda45b32bf4b958cf45b9fd7d5548faf7c1": "d47f13da3a5f804e3bd3f893ef80c3b3",
".git/objects/1d/1fcf462d8f9c455779f8a905e90afc98285ba7": "127f8b38a7f6c3b08df720e66e03698a",
".git/objects/21/5b99427ffca334ae1386f0bf5a27522ec47723": "a3338b7fbe4f1fde28ffaf88f4e209da",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/28406937c9602f37013f9457f35088392e5243": "cf6055ebffd9b96758e2e11cdf678cc3",
".git/objects/2a/6b32a59c80c8cd97709fa4bf09adeb1c6a14f1": "2a8dee50a9a04f4a500911ae1e03d9bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/760434a9fd02caa079186537030b4ce6d15236": "c2cb79a2b69416b831d1a6b9bf5d7dc4",
".git/objects/37/9bce392212cf70381f407577f566c359796897": "e261a054365a6f298b1147a07d3ed5f4",
".git/objects/37/b0a3610888b195e602a2dc33c4c1818d8b5708": "5ff4dff5a81c11d76da0a880c21bc754",
".git/objects/38/e0eb3a1cf13a0782aab95dc15a965631239560": "48e00ffbf82b230c5983a792c4cfc113",
".git/objects/39/d609400a64c45fbd43b39f346f9bd87d86a70b": "a8e4ab14306c860ae2a03cdc834f2a28",
".git/objects/3a/8f2f41eeee046f3f03080fbc16a4f14195d38f": "cb25e6514655c68042cdd21cdf8596e4",
".git/objects/3c/a9a30c0bc7c16e2ab11bc198a83eab6a2ba957": "c00a50251f0b9da6dce0cc535135f5aa",
".git/objects/43/f13db14c32bd9e40ba7c2aa47336d694d318fc": "cbe778de2dafde6c17352ec936bb8e83",
".git/objects/45/edb3dbf4c1724b1cdeb18ef7604072afce3364": "f060cc78a22d15b933dfc7ce23a045b6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/9a0af6053601ab11a37656df736257b81be7ed": "26f49bd63e5de87ac1e94d3afefd7702",
".git/objects/56/9b62dbb663f11c03817a8c667957fa9b707c9f": "e4e8878422fba3890fedbe5b975ab216",
".git/objects/59/c96212fa3b69ba3fbd256507a61477617cec89": "78ef07eb4699bd2b0c1834749488431b",
".git/objects/5b/b23b84335f596d70f6c84ab1aa66e771928c68": "a8e5e3e00a1de5c674b01fb09efc2bd1",
".git/objects/5c/ce513ea8e98659c5658d06f19e2c26cdac341b": "d385643c96e5e1d5366c07273ae7fbcd",
".git/objects/63/0dc290c6333b84b86059d00757023f1cf02bd6": "dae65a3805e5603f82ec40125f203d0a",
".git/objects/67/56fdc510e5a9be1fdc0bc1cdd3edcda27b74de": "aaf68295f9aebf0fc39068fea1a24b24",
".git/objects/6b/83c301347c50ddc4fb8ab22bcac5f856f4ab39": "55ed82257a1f8f29acdb7a74edd9b861",
".git/objects/6c/a8e8ad97a6b668d0b25c37824bb5b02326673e": "09354868bb6e8e4a0e55da43fcaf7ad7",
".git/objects/6d/a33cb6667ca8b55a2f44d5b77820a9dc059cb1": "d1eb9c8652fd822390e2978b37512b94",
".git/objects/72/8e9ba1da1e37a52a79f1dcd65f83be2e844b41": "87062b9e2408fe735790e308aeb1f178",
".git/objects/76/330e6a6beb1afd8bdf780039e32b68814a6049": "aa848138f08bf07704c9406b7a26c402",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/daa02ad99248f966d09a1f77ad700efdd4d72b": "caae07f5b4226fb0796c578dbadf583b",
".git/objects/82/135cf9788165582ef445eb82ef7e6e11369625": "564dd38ee9d633af8dda7d38658e658d",
".git/objects/85/657f4a65e9b83b09bf3a97a9427843f071dab9": "95bb9b8baf5b91bf64b3b8e912d147f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f51010419cd4460ce4b7a8e03a6ff2d68fbbee": "a5d3f31c2a536ea9ddfc9b04e94ae434",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4175305eb6405b010d9198832d721e532834a5": "fc5c19f53fd611b495b91b7f5a878ee8",
".git/objects/8b/9b1c47dfe1d9eb67a3a016d0807ae4a1c6932d": "e7dadb1d819a4484eb8417a7c734c1b2",
".git/objects/8c/abdc342e2a37539fc5b6c4f88d74c6c8cfd3d8": "4e81e146b03305390fb2c050331ebe9c",
".git/objects/8f/cf3fe8d4f61791f6040ec73f8721656cc4d391": "8437b1316dfc6ff672e841f7cea7b142",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/51c2553aef4959bf157593e9d1f48993fe2b25": "f911c973f1258e12f4d18a2402352326",
".git/objects/b0/7748bf99a801d9bb8abedc03cd4437b02e3d8f": "2772b217a16b6d5929e8584a8f3ac736",
".git/objects/b2/896f9a58cf01ead823fe242d1a0582f3d40a54": "747b42342078ba03f06e93a22e3a7330",
".git/objects/b5/d870e92b8c4b708f18347f823ff1b4ac3a6b56": "1ecd4494560a6644355680e3fa19ef4b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5ca8601129ce83b0b2c7e799244b91bac62ca8": "7eb6c7caa71bb5e65cfabff14c09ede8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/899b97171975f4e55c1600d63c474cdf906585": "c360a85d1968eb02a19be60049b66ed2",
".git/objects/bf/d14fc817f6e8623834627c6ee732028829f943": "a8c15a6226bf845ad84db5c4e7f2e08f",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c6/efcb7258783c4281333eefea9e2d6643d16f6c": "64e58a7137a4737a835c077ad946e9a3",
".git/objects/c8/a8b5fc79ced15d525e2b2245d325ade972acaf": "db1f3ecc9e29024b73c5e876a08d6230",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c519a0d15fa5b5b40944b81d53b35bb2fcc3a3": "b91231d9fdbe3d6dd175f3cab8451921",
".git/objects/d8/fe1e14fc1ab9bce6d969b87c1c2c84b4b9c85e": "d32dccab3c0aaef3f44616eba72c1172",
".git/objects/db/0a4e3b9d925c0a49404a0d17e9a53bfff1aacd": "e750193be69a61c06ded1f2cadc74b19",
".git/objects/dd/a9139e720c6bd89ed0649b55999af3189f094f": "a462071f168a1ba4faeb66826999db98",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/f6a598e615507e47355d81a4a45d345d5d7071": "460a5ff9936b9f3ff2121fdeac3cfd3d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/f25ea2d6dd36ae089bf96d69e6ade81cd31d2f": "ddc23f190c20ebd37e06028dcfa9fd25",
".git/objects/f9/82723cbdfe89248ada634aab616e04e6337492": "1da923cde536448a2531b0a7aa87629e",
".git/objects/f9/f2bd58e64854e5bf4a6bc483da03cf7fed19b1": "686ff617145e0d675ee1f8cea8cd9574",
".git/refs/heads/main": "5037db000eaedbd667b20b4eb8a9fc70",
".git/refs/remotes/origin/main": "5037db000eaedbd667b20b4eb8a9fc70",
"assets/AssetManifest.json": "fe99163711a2dafad6213b51610cdbdd",
"assets/assets/icons/appli.svg": "d8fa22060e29b11fe3a6d6deb0b1d5d5",
"assets/assets/icons/arrow_down.svg": "7f9a30ba5f10e00ac02e6c6383407b96",
"assets/assets/icons/calendar.svg": "3c5ac00f4b6d98748547b2fe3eec2883",
"assets/assets/icons/group.svg": "f68e563239a056ff89b5f1387537703e",
"assets/assets/icons/log_out.svg": "122163efbf022c04c045d42f1a1be267",
"assets/assets/icons/megaphone_83808.svg": "e8bcaa86e54f19414cfae09cf78db745",
"assets/assets/icons/msg.svg": "456a7b4215b71d1e72a2de54c705c055",
"assets/assets/icons/notif.svg": "633d29b2947f2d97dd13fc0f24a69c1d",
"assets/assets/icons/record.svg": "8da500fdce2b4adc84cf12143f6826f3",
"assets/assets/icons/setting.svg": "238bf605c78388c56697e0c690c12c0c",
"assets/assets/icons/user.svg": "8eeddc3e58e965d38393456d95264525",
"assets/assets/icons/write.svg": "cd525464e2ed653194445e798fdd66a0",
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
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "109480e3274dbec1eca7410f8ade9bc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9482d7bdb6a3fe1c439f63a03881e25f",
"/": "9482d7bdb6a3fe1c439f63a03881e25f",
"main.dart.js": "87f211b23b4367a45a044b7c464d5b4a",
"manifest.json": "19841c5827ccb9647a7cde86a7eaca08",
"version.json": "2c8d06181daa3ea4025f698bb6dcad7e"
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
