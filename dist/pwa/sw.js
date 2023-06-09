if (!self.define) {
  let e,
    s = {};
  const i = (i, c) => (
    (i = new URL(i + '.js', c).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, a) => {
    const f =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[f]) return;
    let n = {};
    const r = (e) => i(e, f),
      o = { module: { uri: f }, exports: n, require: r };
    s[f] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (a(...e), n));
  };
}
define(['./workbox-17c5f633'], function (e) {
  'use strict';
  e.setCacheNameDetails({ prefix: 'auto-gpt-web' }),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: 'assets/ChatPage.3189029b.js',
          revision: 'f7b00d3ef466c74468e9e0b18814d7ec',
        },
        {
          url: 'assets/ChatPage.6cb2579c.css',
          revision: 'd2a271b5ee716f6f0fe66badeb011384',
        },
        {
          url: 'assets/credential.f4c0e425.js',
          revision: 'e2c791efc1672f533f6558304ea234fc',
        },
        {
          url: 'assets/ErrorNotFound.c232e61f.js',
          revision: '620c3d8bc269474a2b62a74a657fafa8',
        },
        {
          url: 'assets/fastclick.8a4a8267.js',
          revision: '40efabedb876d409f1732920a78f9ae0',
        },
        {
          url: 'assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff',
          revision: '3e1afe59fa075c9e04c436606b77f640',
        },
        {
          url: 'assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2',
          revision: 'a4160421d2605545f69a4cd6cd642902',
        },
        {
          url: 'assets/i18n.4e2e0a74.js',
          revision: '3d887e5ba64af365329edf7f8ee87f4d',
        },
        {
          url: 'assets/index.7c89327f.js',
          revision: 'e0a1e86244ae81143807f956c940aeff',
        },
        {
          url: 'assets/index.821745d0.css',
          revision: '3db70b5fcebc6829ca9fcb31928827a0',
        },
        {
          url: 'assets/IndexPage.140a039f.css',
          revision: 'c78159399911a9d6d6c32a8e54043ba3',
        },
        {
          url: 'assets/IndexPage.df8a5349.js',
          revision: 'a26e9d48d6c6f050e7bc093176998077',
        },
        {
          url: 'assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff',
          revision: '4aa2e69855e3b83110a251c47fdd05fc',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff',
          revision: '40bcb2b8cc5ed94c4c21d06128e0e532',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff',
          revision: 'ea60988be8d6faebb4bc2a55b1f76e22',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff',
          revision: '0774a8b7ca338dc1aba5a0ec8f2b9454',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff',
          revision: 'bcb7c7e2499a055f0e2f93203bdb282b',
        },
        {
          url: 'assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff',
          revision: 'd3907d0ccd03b1134c24d3bcaf05b698',
        },
        {
          url: 'assets/MainLayout.77517535.css',
          revision: '8a90a5d6a4a839a84736ed6d5eca742b',
        },
        {
          url: 'assets/MainLayout.ec80ee70.js',
          revision: 'a49763c19fc87a63d3eb7c85d479db96',
        },
        {
          url: 'assets/plugin-vue_export-helper.21dcd24c.js',
          revision: 'b29b145139fc88e89a46af507277557d',
        },
        {
          url: 'assets/scroll.30d58875.js',
          revision: '4f11af3dda0a531f343197989e992441',
        },
        { url: 'favicon.ico', revision: 'f4facfeaed834544d622544acfbb7722' },
        {
          url: 'icons/apple-icon-120x120.png',
          revision: 'd082235f6e6d2109e84e397f66fa868d',
        },
        {
          url: 'icons/apple-icon-152x152.png',
          revision: '3c728ce3e709b7395be487becf76283a',
        },
        {
          url: 'icons/apple-icon-167x167.png',
          revision: '3fec89672a18e4b402ede58646917c2d',
        },
        {
          url: 'icons/apple-icon-180x180.png',
          revision: 'aa47843bd47f34b7ca4b99f65dd25955',
        },
        {
          url: 'icons/favicon-128x128.png',
          revision: 'ab92df0270f054ca388127c9703a4911',
        },
        {
          url: 'icons/favicon-16x16.png',
          revision: 'e4b046d41e08e6fa06626d6410ab381d',
        },
        {
          url: 'icons/favicon-32x32.png',
          revision: '410858b01fa6d3d66b7bf21447c5f1fc',
        },
        {
          url: 'icons/favicon-96x96.png',
          revision: 'db2bde7f824fb4057ffd1c42f6ed756e',
        },
        {
          url: 'icons/icon-128x128.png',
          revision: 'ab92df0270f054ca388127c9703a4911',
        },
        {
          url: 'icons/icon-192x192.png',
          revision: '7659f0d3e9602e71811f8b7cf2ce0e8e',
        },
        {
          url: 'icons/icon-256x256.png',
          revision: 'cf5ad3498fb6fda43bdafd3c6ce9b824',
        },
        {
          url: 'icons/icon-384x384.png',
          revision: 'fdfc1b3612b6833a27a7b260c9990247',
        },
        {
          url: 'icons/icon-512x512.png',
          revision: '2c2dc987945806196bd18cb6028d8bf4',
        },
        {
          url: 'icons/ms-icon-144x144.png',
          revision: '8de1b0e67a62b881cd22d935f102a0e6',
        },
        {
          url: 'icons/safari-pinned-tab.svg',
          revision: '3e4c3730b00c89591de9505efb73afd3',
        },
        { url: 'index.html', revision: '25dcb5613353a8718781b6e83ca95056' },
        { url: 'manifest.json', revision: '982f52de511f21ae3a8b17f1220f8444' },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('index.html'), {
        denylist: [/sw\.js$/, /workbox-(.)*\.js$/],
      })
    );
});
