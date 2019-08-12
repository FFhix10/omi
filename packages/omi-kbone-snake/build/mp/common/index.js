module.exports = function(window, document) {var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([7,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/omis/dist/omis.esm.js
var omis_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/index/_index.css
var _index = __webpack_require__(4);
var _index_default = /*#__PURE__*/__webpack_require__.n(_index);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(3);
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: ./src/components/game/index.css
var game = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/game/index.js




var game_Game = function Game(_ref, _ref2, _, _ref3) {
  objectDestructuringEmpty_default()(_ref);

  objectDestructuringEmpty_default()(_ref2);

  var data = _ref3.data;
  return Object(omis_esm["a" /* h */])("div", {
    "class": "game"
  }, data.map.map(function (row) {
    return Object(omis_esm["a" /* h */])("p", null, row.map(function (col) {
      if (col) {
        return Object(omis_esm["a" /* h */])("b", {
          "class": 's'
        });
      }

      return Object(omis_esm["a" /* h */])("b", null);
    }));
  }));
};

game_Game.use = ['map'];
/* harmony default export */ var components_game = (game_Game);
// CONCATENATED MODULE: ./src/components/index/index.js




var index_Index = function Index(props, store, _, $) {
  return Object(omis_esm["a" /* h */])("div", {
    "class": "container"
  }, Object(omis_esm["a" /* h */])(components_game, null), Object(omis_esm["a" /* h */])("div", {
    "class": "ctrl",
    style: "margin-top: 20rpx;"
  }, Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    onClick: $.turnUp,
    style: "top: 0rpx; left: 374rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(0rpx, 63rpx) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": "_1zCL"
  }, "Up")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    onClick: $.turnDown,
    style: "top: 180rpx; left: 374rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(0rpx, -71rpx) rotate(180deg) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Down")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    onClick: $.turnLeft,
    style: "top: 90rpx; left: 284rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(60rpx, -12rpx) rotate(270deg) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Left")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    onClick: $.turnRight,
    style: "top: 90rpx; left: 464rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(-60rpx, -12rpx) rotate(90deg) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Right")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn space",
    onClick: $.toggleSpeed,
    style: "top: 100rpx; left: 52rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "\u52A0\u901F/\u51CF\u901F")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn dg small",
    onClick: $.reset,
    style: "top: 0rpx; left: 156rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Reset(R)")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn RBZg small",
    onClick: $.pauseOrPlay,
    style: "top: 0rpx; left: 60rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Pause/Play"))));
};

index_Index.css = _index_default.a;
/* harmony default export */ var index = (index_Index);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/models/snake.js



var snake_Snake =
/*#__PURE__*/
function () {
  function Snake() {
    classCallCheck_default()(this, Snake);

    this.body = [3, 1, 2, 1, 1, 1];
    this.dir = 'right';
  }

  createClass_default()(Snake, [{
    key: "move",
    value: function move() {
      var b = this.body;
      b.pop();
      b.pop();

      switch (this.dir) {
        case 'up':
          b.unshift(b[0], b[1] - 1);
          break;

        case 'right':
          b.unshift(b[0] + 1, b[1]);
          break;

        case 'down':
          b.unshift(b[0], b[1] + 1);
          break;

        case 'left':
          b.unshift(b[0] - 1, b[1]);
          break;
      }
    }
  }, {
    key: "turnUp",
    value: function turnUp() {
      if (this.dir !== 'down') this.dir = 'up';
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      if (this.dir !== 'left') this.dir = 'right';
    }
  }, {
    key: "turnDown",
    value: function turnDown() {
      if (this.dir !== 'up') this.dir = 'down';
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      if (this.dir !== 'right') this.dir = 'left';
    }
  }]);

  return Snake;
}();

/* harmony default export */ var snake = (snake_Snake);
// CONCATENATED MODULE: ./src/models/game.js




var models_game_Game =
/*#__PURE__*/
function () {
  function Game() {
    classCallCheck_default()(this, Game);

    this.map = [];
    this.size = 16;
    this.loop = null;
    this.interval = 500;
    this.paused = false;
    this._preDate = Date.now();
    this.init();
  }

  createClass_default()(Game, [{
    key: "init",
    value: function init() {
      this.snake = new snake();

      for (var i = 0; i < 16; i++) {
        var row = [];

        for (var j = 0; j < 16; j++) {
          row.push(0);
        }

        this.map.push(row);
      }
    }
  }, {
    key: "tick",
    value: function tick() {
      this.snake.move();
      var map = this.map;

      for (var i = 0; i < this.size; i++) {
        for (var j = 0; j < this.size; j++) {
          map[i][j] = 0;
        }
      }

      for (var k = 0, len = this.snake.body.length; k < len; k += 2) {
        this.snake.body[k + 1] %= this.size;
        this.snake.body[k] %= this.size;
        if (this.snake.body[k + 1] < 0) this.snake.body[k + 1] += this.size;
        if (this.snake.body[k] < 0) this.snake.body[k] += this.size;
        map[this.snake.body[k + 1]][this.snake.body[k]] = 1;
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this.loop = setInterval(function () {
        if (Date.now() - _this._preDate > _this.interval) {
          _this._preDate = Date.now();

          if (!_this.paused) {
            _this.tick();
          }
        }
      }, 16);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.loop);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.interval = 500;
      this.snake.body = [3, 1, 2, 1, 1, 1];
      this.snake.dir = 'right';
    }
  }]);

  return Game;
}();

/* harmony default export */ var models_game = (models_game_Game);
// CONCATENATED MODULE: ./src/stores/index.js

var stores_game = new models_game();
var stores_snake = stores_game.snake,
    map = stores_game.map;
stores_game.start();
/* harmony default export */ var stores = ({
  data: {
    map: map
  },
  turnUp: function turnUp() {
    stores_snake.turnUp();
  },
  turnRight: function turnRight() {
    stores_snake.turnRight();
  },
  turnDown: function turnDown() {
    stores_snake.turnDown();
  },
  turnLeft: function turnLeft() {
    stores_snake.turnLeft();
  },
  pauseOrPlay: function pauseOrPlay() {
    if (stores_game.paused) {
      stores_game.play();
    } else {
      stores_game.pause();
    }
  },
  reset: function reset() {
    stores_game.reset();
  },
  toggleSpeed: function toggleSpeed() {
    stores_game.interval === 500 ? stores_game.interval = 150 : stores_game.interval = 500;
  }
});
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });



function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  Object(omis_esm["b" /* render */])(Object(omis_esm["a" /* h */])(index, null), '#app', stores);
}
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ })
/******/ ])["default"];}