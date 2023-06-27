"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WelcomeCard = void 0;
var _jimp = _interopRequireDefault(require("jimp"));
var _BaseCard = require("./BaseCard.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const width = 1920;
const height = 1080;
class WelcomeCard extends _BaseCard.BaseCard {
  constructor(props) {
    super(props);
  }
  async applyBackground() {
    const background = await _jimp.default.read(this.background);
    background.resize(width, height);
    this.background_obj = background;
    this.lienzo.composite(background, 0, 0);
  }
  async applyOverlay() {
    const overlay = new _jimp.default(width, height, 0x00000040);
    this.lienzo.composite(overlay, 0, 0);
  }
  async applyAvatar() {
    const avatar = await _jimp.default.read(this.avatar);
    avatar.resize(512, 512);
    avatar.circle();
    const x = (this.background_obj.getWidth() - avatar.getWidth()) / 2;
    const y = (this.background_obj.getHeight() - avatar.getHeight()) / 5;
    this.lienzo.composite(avatar, x, y);
  }
  async applyText(title, username, subtitle) {
    const gfont = await _jimp.default.loadFont(_jimp.default.FONT_SANS_128_WHITE);
    const lfont = await _jimp.default.loadFont(_jimp.default.FONT_SANS_64_WHITE);
    this.lienzo.print(gfont, 0, this.lienzo.getHeight() / 10 * 6, {
      text: title,
      alignmentX: _jimp.default.HORIZONTAL_ALIGN_CENTER,
      size: 1024
    }, 1920, 1080);
    this.lienzo.print(lfont, 0, this.lienzo.getHeight() / 10 * 7.25, {
      text: username,
      alignmentX: _jimp.default.HORIZONTAL_ALIGN_CENTER,
      size: 1024
    }, 1920, 1080);
    this.lienzo.print(lfont, 0, this.lienzo.getHeight() / 10 * 8, {
      text: subtitle,
      alignmentX: _jimp.default.HORIZONTAL_ALIGN_CENTER,
      size: 1024
    }, 1920, 1080);
  }
  async build() {
    await this.applyBackground();
    await this.applyOverlay();
    await this.applyAvatar();
    await this.applyText(this.title, this.username, this.subtitle);
  }
}
exports.WelcomeCard = WelcomeCard;