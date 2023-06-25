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