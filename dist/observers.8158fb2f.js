// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/observers.js":[function(require,module,exports) {
// Talvez adicionar estes codigos junto ao main.js
var menu_anchor_01 = document.getElementById("menu_anchor_01");
var menu_anchor_02 = document.getElementById("menu_anchor_02");
var menu_anchor_03 = document.getElementById("menu_anchor_03");
var menu_anchor_04 = document.getElementById("menu_anchor_04");
var menu_anchor_05 = document.getElementById("menu_anchor_05");
var menu_anchor_06 = document.getElementById("menu_anchor_06");
var menu_anchor_07 = document.getElementById("menu_anchor_07");
var sections = document.querySelectorAll(".section-observe");
var options = {
  threshold: 0.01
};
var section1_observer = new IntersectionObserver(function (entries, section1_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_01.classList.add("nav-item-active");
      menu_anchor_02.classList.remove("nav-item-active");
      menu_anchor_03.classList.remove("nav-item-active");
      menu_anchor_04.classList.remove("nav-item-active");
      menu_anchor_05.classList.remove("nav-item-active");
      menu_anchor_06.classList.remove("nav-item-active");
      menu_anchor_07.classList.remove("nav-item-active");
    }
  });
}, options);
var section2_observer = new IntersectionObserver(function (entries, section2_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_02.classList.add("nav-item-active");
      menu_anchor_01.classList.remove("nav-item-active");
      menu_anchor_03.classList.remove("nav-item-active");
      menu_anchor_04.classList.remove("nav-item-active");
      menu_anchor_05.classList.remove("nav-item-active");
      menu_anchor_06.classList.remove("nav-item-active");
      menu_anchor_07.classList.remove("nav-item-active");
    }
  });
}, options);
var section3_observer = new IntersectionObserver(function (entries, section3_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_03.classList.add("nav-item-active");
      menu_anchor_01.classList.remove("nav-item-active");
      menu_anchor_02.classList.remove("nav-item-active");
      menu_anchor_04.classList.remove("nav-item-active");
      menu_anchor_05.classList.remove("nav-item-active");
      menu_anchor_06.classList.remove("nav-item-active");
      menu_anchor_07.classList.remove("nav-item-active");
    }
  });
}, options);
var section4_observer = new IntersectionObserver(function (entries, section4_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_04.classList.add("nav-item-active");
      menu_anchor_01.classList.remove("nav-item-active");
      menu_anchor_02.classList.remove("nav-item-active");
      menu_anchor_03.classList.remove("nav-item-active");
      menu_anchor_05.classList.remove("nav-item-active");
      menu_anchor_06.classList.remove("nav-item-active");
      menu_anchor_07.classList.remove("nav-item-active");
    }
  });
}, options);
var section5_observer = new IntersectionObserver(function (entries, section5_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_05.classList.add("nav-item-active");
      menu_anchor_01.classList.remove("nav-item-active");
      menu_anchor_02.classList.remove("nav-item-active");
      menu_anchor_03.classList.remove("nav-item-active");
      menu_anchor_04.classList.remove("nav-item-active");
      menu_anchor_06.classList.remove("nav-item-active");
      menu_anchor_07.classList.remove("nav-item-active");
    }
  });
}, options);
var section6_observer = new IntersectionObserver(function (entries, section6_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_06.classList.add("nav-item-active");
      menu_anchor_01.classList.remove("nav-item-active");
      menu_anchor_02.classList.remove("nav-item-active");
      menu_anchor_03.classList.remove("nav-item-active");
      menu_anchor_04.classList.remove("nav-item-active");
      menu_anchor_05.classList.remove("nav-item-active");
      menu_anchor_07.classList.remove("nav-item-active");
    }
  });
}, options);
var section7_observer = new IntersectionObserver(function (entries, section7_observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      menu_anchor_07.classList.add("nav-item-active");
      menu_anchor_01.classList.remove("nav-item-active");
      menu_anchor_02.classList.remove("nav-item-active");
      menu_anchor_03.classList.remove("nav-item-active");
      menu_anchor_04.classList.remove("nav-item-active");
      menu_anchor_05.classList.remove("nav-item-active");
      menu_anchor_06.classList.remove("nav-item-active");
    }
  });
}, options);
section1_observer.observe(sections[0]);
section2_observer.observe(sections[1]);
section3_observer.observe(sections[2]);
section4_observer.observe(sections[3]);
section5_observer.observe(sections[4]);
section6_observer.observe(sections[5]);
section7_observer.observe(sections[6]);
},{}],"../../../../Users/joaot/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57858" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/joaot/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/observers.js"], null)
//# sourceMappingURL=/observers.8158fb2f.js.map