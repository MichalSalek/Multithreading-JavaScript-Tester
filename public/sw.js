if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>t(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WkPGWi6NARdaJTUDtQtqI/_buildManifest.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/WkPGWi6NARdaJTUDtQtqI/_middlewareManifest.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/WkPGWi6NARdaJTUDtQtqI/_ssgManifest.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/571.720db3db8d918dd1.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/616.30bcc10e9d9bec4d.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/796-2733ef042a0756ab.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/828-89805806d7d92a03.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/main-b60b6a7cb73ef310.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/pages/404-f2ea95f8d81b9465.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/pages/_app-0bc57636fb11e152.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/pages/index-f478cf5e486d6a00.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/pages/scoreboard-685ce224a90af322.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/pages/start-8644d2c249e43f84.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/chunks/webpack-5ca4d54d2721ea42.js",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/css/2f0ddee0dade37b8.css",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/css/45b8b05fac4e0964.css",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/css/5a5290406be6ab6f.css",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/css/5c627aacacce5e9e.css",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/_next/static/css/81eaaaf708858203.css",revision:"WkPGWi6NARdaJTUDtQtqI"},{url:"/calculation-worker.js",revision:"99feae2fc9c668713c54cef6810ef1d4"},{url:"/favicon.ico",revision:"33f82a8624804deb12b8bff4e774fb71"},{url:"/fontawesome.min.js",revision:"9a862c651cae5e7262b1fa9d7ea94454"},{url:"/icon-pack.min.js",revision:"e8d26eaf503eecca66d75fe7a085ce1d"},{url:"/logo.svg",revision:"265279db38f63087068f5c5da9e8166c"},{url:"/stats.min.js",revision:"baa2bd75987a4b0877f0eb3472ee3026"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
