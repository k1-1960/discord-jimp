"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _WelcomeCard = require("./builders/WelcomeCard");
Object.keys(_WelcomeCard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WelcomeCard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _WelcomeCard[key];
    }
  });
});
var _RankCard = require("./builders/RankCard");
Object.keys(_RankCard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RankCard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _RankCard[key];
    }
  });
});
var _text = require("./utils/text");
Object.keys(_text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _text[key];
    }
  });
});