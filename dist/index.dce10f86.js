// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fpu4n":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "34dd459bdce10f86";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"a30jD":[function(require,module,exports) {
var global = arguments[3];
/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(e, t) {
    module.exports = t();
})(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === ({}).toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch(e.nodeName){
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e;
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe;
    }
    function p(e) {
        if (!e) return document.documentElement;
        for(var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== [
            "TH",
            "TD",
            "TABLE"
        ].indexOf(n.nodeName) && "static" === t(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o = "top" === t ? "scrollTop" : "scrollLeft", n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, "top"), i = l(t, "left"), r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
    }
    function m(e, t) {
        var o = "x" === t ? "Left" : "Top", n = "Left" == o ? "Right" : "Bottom";
        return parseFloat(e["border" + o + "Width"]) + parseFloat(e["border" + n + "Width"]);
    }
    function h(e, t, o, n) {
        return ee(t["offset" + e], t["scroll" + e], o["client" + e], o["offset" + e], o["scroll" + e], r(10) ? parseInt(o["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
    }
    function c(e) {
        var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o);
        return {
            height: h("Height", t, o, n),
            width: h("Width", t, o, n)
        };
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, "top"), i = l(e, "left");
                o.top += n, o.left += i, o.bottom += n, o.right += i;
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }, s = "HTML" === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.width, a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, "x"), h -= m(u, "y"), p.width -= f, p.height -= h;
        }
        return g(p);
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = "HTML" === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth), c = parseFloat(m.borderLeftWidth);
        i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var w = parseFloat(m.marginTop), y = parseFloat(m.marginLeft);
            b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
        }
        return (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) && (b = f(b, o)), b;
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, "left"), d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d);
    }
    function y(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var i = o(e);
        return !!i && y(i);
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for(var o = e.parentElement; o && "none" === t(o, "transform");)o = o.parentElement;
        return o || document.documentElement;
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = {
            top: 0,
            left: 0
        }, l = s ? E(e) : a(e, i(t));
        if ("viewport" === p) d = w(l, s);
        else {
            var f;
            "scrollParent" === p ? (f = n(o(t)), "BODY" === f.nodeName && (f = e.ownerDocument.documentElement)) : "window" === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ("HTML" === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument), g = h.height, u = h.width;
                d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left;
            } else d = m;
        }
        r = r || 0;
        var v = "number" == typeof r;
        return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d;
    }
    function x(e) {
        var t = e.width, o = e.height;
        return t * o;
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = v(o, n, r, i), s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }, d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            });
        }).sort(function(e, t) {
            return t.area - e.area;
        }), a = d.filter(function(e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight;
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E(t) : a(t, i(o));
        return b(o, r, n);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r;
    }
    function T(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function C(e, t, o) {
        o = o.split("-")[0];
        var n = S(e), i = {
            width: n.width,
            height: n.height
        }, r = -1 !== [
            "right",
            "left"
        ].indexOf(o), p = r ? "top" : "left", s = r ? "left" : "top", d = r ? "height" : "width", a = r ? "width" : "height";
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o;
        });
        var n = D(e, function(e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
        return i.forEach(function(t) {
            t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t["function"] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
        }), o;
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name, n = e.enabled;
            return n && o === t;
        });
    }
    function B(e) {
        for(var t = [
            !1,
            "ms",
            "Webkit",
            "Moz",
            "O"
        ], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++){
            var i = t[n], r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = "BODY" === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || M(n(p.parentNode), t, o, i), i.push(p);
    }
    function F(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener("resize", o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, "scroll", o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function R(e, t) {
        return A(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
    }
    function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = "";
            -1 !== [
                "width",
                "height",
                "top",
                "right",
                "bottom",
                "left"
            ].indexOf(o) && Y(t[o]) && (n = "px"), e.style[o] = t[o] + n;
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t) {
        var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function(e) {
            return e;
        }, s = r(i.width), d = r(n.width), a = -1 !== [
            "left",
            "right"
        ].indexOf(e.placement), l = -1 !== e.placement.indexOf("-"), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        };
    }
    function K(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t;
        }), i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order;
        });
        if (!i) {
            var r = "`" + t + "`";
            console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return i;
    }
    function z(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e), n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch(p){
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return a = "vh" === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
        }
        return r;
    }
    function X(e, t, o, n) {
        var i = [
            0,
            0
        ], r = -1 !== [
            "right",
            "left"
        ].indexOf(n), p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim();
        }), s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/);
        }));
        p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var d = /\s*,\s*|\s+/, a = -1 === s ? [
            p
        ] : [
            p.slice(0, s).concat([
                p[s].split(d)[0]
            ]),
            [
                p[s].split(d)[1]
            ].concat(p.slice(s + 1))
        ];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? "height" : "width", p = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== [
                    "+",
                    "-"
                ].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
            }, []).map(function(e) {
                return _(e, i, t, o);
            });
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
            });
        }), i;
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split("-")[0];
        return o = Y(+n) ? [
            +n,
            0
        ] : X(n, p, s, d), "left" === d ? (p.top += o[0], p.left -= o[1]) : "right" === d ? (p.top += o[0], p.left += o[1]) : "top" === d ? (p.left += o[0], p.top -= o[1]) : "bottom" === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
    }
    var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, oe = function() {
        for(var e = [
            "Edge",
            "Trident",
            "Firefox"
        ], t = 0; t < e.length; t += 1)if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
        return 0;
    }(), ne = te && window.Promise, ie = ne ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e();
            }));
        };
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e();
            }, oe));
        };
    }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, de = function() {
        function e(e, t) {
            for(var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
        return function(t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
        };
    }(), ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e;
    }, le = Object.assign || function(e) {
        for(var t, o = 1; o < arguments.length; o++)for(var n in t = arguments[o], t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }, fe = te && /Firefox/i.test(navigator.userAgent), me = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start"
    ], he = me.slice(3), ce = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, ge = function() {
        function t(o, n) {
            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t), this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update);
            }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e]);
            }).sort(function(e, t) {
                return e.order - t.order;
            }), this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p;
        }
        return de(t, [
            {
                key: "update",
                value: function() {
                    return k.call(this);
                }
            },
            {
                key: "destroy",
                value: function() {
                    return H.call(this);
                }
            },
            {
                key: "enableEventListeners",
                value: function() {
                    return I.call(this);
                }
            },
            {
                key: "disableEventListeners",
                value: function() {
                    return U.call(this);
                }
            }
        ]), t;
    }();
    return ge.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement, o = t.split("-")[0], n = t.split("-")[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== [
                            "bottom",
                            "top"
                        ].indexOf(o), d = s ? "left" : "top", a = s ? "width" : "height", l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B("transform"), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
                    i.top = "", i.left = "", i[n] = "";
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority, f = e.offsets.popper, m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o);
                        },
                        secondary: function(e) {
                            var o = "right" === e ? "left" : "top", n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ("right" === e ? f.width : f.height))), ae({}, o, n);
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === [
                            "left",
                            "top"
                        ].indexOf(e) ? "secondary" : "primary";
                        f = le({}, f, m[t](e));
                    }), e.offsets.popper = f, e;
                },
                priority: [
                    "left",
                    "right",
                    "top",
                    "bottom"
                ],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split("-")[0], r = Z, p = -1 !== [
                        "top",
                        "bottom"
                    ].indexOf(i), s = p ? "right" : "bottom", d = p ? "left" : "top", a = p ? "width" : "height";
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = o.element;
                    if ("string" == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== [
                        "left",
                        "right"
                    ].indexOf(r), l = a ? "height" : "width", f = a ? "Top" : "Left", m = f.toLowerCase(), h = a ? "left" : "top", c = a ? "bottom" : "right", u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w["margin" + f]), E = parseFloat(w["border" + f + "Width"]), v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ""), n), e;
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split("-")[0], i = T(n), r = e.placement.split("-")[1] || "", p = [];
                    switch(t.behavior){
                        case ce.FLIP:
                            p = [
                                n,
                                i
                            ];
                            break;
                        case ce.CLOCKWISE:
                            p = G(n);
                            break;
                        case ce.COUNTERCLOCKWISE:
                            p = G(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split("-")[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = "left" === n && f(a.right) > f(l.left) || "right" === n && f(a.left) < f(l.right) || "top" === n && f(a.bottom) > f(l.top) || "bottom" === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = "left" === n && h || "right" === n && c || "top" === n && g || "bottom" === n && u, w = -1 !== [
                            "top",
                            "bottom"
                        ].indexOf(n), y = !!t.flipVariations && (w && "start" === r && h || w && "end" === r && c || !w && "start" === r && g || !w && "end" === r && u), E = !!t.flipVariationsByContent && (w && "start" === r && c || w && "end" === r && h || !w && "start" === r && u || !w && "end" === r && g), v = y || E;
                        (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? "-" + r : ""), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"));
                    }), e;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement, o = t.split("-")[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== [
                        "left",
                        "right"
                    ].indexOf(o), s = -1 === [
                        "top",
                        "left"
                    ].indexOf(o);
                    return i[p ? "left" : "top"] = r[o] - (s ? i[p ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, o = D(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name;
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                    }
                    return e;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name;
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = q(e, 2 > window.devicePixelRatio || !fe), c = "bottom" === o ? "top" : "bottom", g = "right" === n ? "left" : "right", b = B("transform");
                    if (d = "bottom" == c ? "HTML" === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = "right" == g ? "HTML" === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = "translate3d(" + s + "px, " + d + "px, 0)", m[c] = 0, m[g] = 0, m.willChange = "transform";
                    else {
                        var w = "bottom" == c ? -1 : 1, y = "right" == g ? -1 : 1;
                        m[c] = d * w, m[g] = s * y, m.willChange = c + ", " + g;
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e;
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e;
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute("x-placement", p), V(t, {
                        position: o.positionFixed ? "fixed" : "absolute"
                    }), o;
                },
                gpuAcceleration: void 0
            }
        }
    }, ge;
});

},{}]},["fpu4n","a30jD"], "a30jD", "parcelRequire2761")

//# sourceMappingURL=index.dce10f86.js.map
