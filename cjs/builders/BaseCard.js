"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseCard = void 0;
var _jimp = _interopRequireDefault(require("jimp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class BaseCard {
  constructor(props) {
    this.width = 1920;
    this.height = 1080;
    this.username = "";
    this.background = "";
    this.avatar = "";
    this.title = "";
    this.subtitle = "";
    Object.entries(props).forEach(([x, v]) => Object.defineProperty(this, x, {
      value: v
    }));
    this.lienzo = new _jimp.default(this.width, this.height);
  }
  async buffer() {
    return await this.lienzo.getBufferAsync(_jimp.default.MIME_JPEG);
  }
  async save(route) {
    await this.lienzo.writeAsync(route);
  }
}
exports.BaseCard = BaseCard;