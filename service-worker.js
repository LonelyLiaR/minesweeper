"use strict";var precacheConfig=[["./index.html","89eae93f9a4a9ced5a1867665d317bed"],["./static/js/main.715b7d87.js","39f37311ac2b1c0358b356d3acb28f53"],["./static/media/bomb.71a091aa.svg","71a091aae21d6cc85bb0e6263ad58429"],["./static/media/boom.d198f92b.svg","d198f92b9911c7fdbb12baa694a819a2"],["./static/media/dizzy_face.08cf46d4.svg","08cf46d4be10cd96a7f69a8b372d1425"],["./static/media/eight.120c0e72.svg","120c0e7253bdea0e2368c3abab3b52d2"],["./static/media/five.854f929e.svg","854f929e490c80c306b4854fd9286561"],["./static/media/four.a90d3699.svg","a90d369915afd3948c9ede29bd1a0f84"],["./static/media/grinning.7c010dc6.svg","7c010dc6da25c012643ea22c1f002bb4"],["./static/media/joystick.10995af4.svg","10995af4aed60986dfbc3552fa488865"],["./static/media/one.3e64ed5e.svg","3e64ed5e82d4052e3aa5e96b37f92fe7"],["./static/media/open_mouth.2312e90b.svg","2312e90b9fc75749149a200817b952f2"],["./static/media/seven.c14ce26d.svg","c14ce26d6c0545d0deeb3ed5f1d17ccd"],["./static/media/six.3e0e0aaf.svg","3e0e0aafbf4dd54e860f411f890e9d0d"],["./static/media/sunglasses.5f80f04e.svg","5f80f04e6ee97feebdd00feff92ced82"],["./static/media/three.7a8f9ea0.svg","7a8f9ea01b26271df0309c099a7964e2"],["./static/media/triangular_flag_on_post.f5f43be4.svg","f5f43be48e7804a8265947d8dd64e430"],["./static/media/two.220aeaec.svg","220aeaecfe707b78da55970fe7f9e979"],["./static/media/wrench.eed642a4.svg","eed642a423f5147c48ad395310a3d797"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});