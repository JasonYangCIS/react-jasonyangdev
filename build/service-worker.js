"use strict";var precacheConfig=[["/index.html","fb586ee41ec8ed96690dcf0d1a3ded39"],["/static/css/main.2e2b47e8.css","920e2e12b4e605ff301097836292dba3"],["/static/js/main.20299fab.js","5492ad7dbbe1663bfcbf8c35bd5184a9"],["/static/media/WeatherIcons.03233c52.woff","03233c52add45d63d23999002b85cda1"],["/static/media/WeatherIcons.513a641c.svg","513a641cadfffe41d9d5d36270b4eed5"],["/static/media/WeatherIcons.68cc09d0.woff2","68cc09d0f12e4061ecc6a60b268c2f75"],["/static/media/WeatherIcons.8e362188.ttf","8e362188c9b7de170ffaacdad77bd312"],["/static/media/WeatherIcons.bc87d7d0.eot","bc87d7d009f787c56ee17997966045f7"],["/static/media/fontawesome-webfont.29800836.svg","2980083682e94d33a66eef2e7d612519"],["/static/media/fontawesome-webfont.706450d7.ttf","706450d7bba6374ca02fe167d86685cb"],["/static/media/fontawesome-webfont.97493d3f.woff2","97493d3f11c0a3bd5cbd959f5d19b699"],["/static/media/fontawesome-webfont.d9ee23d5.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/static/media/fontawesome-webfont.f7c2b4b7.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/static/media/overlay.63337cc7.png","63337cc73a290619340053d734f3b53e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});