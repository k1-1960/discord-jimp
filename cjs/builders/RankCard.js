"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RankCard = void 0;
var _jimp = _interopRequireDefault(require("jimp"));
var _BaseCard = require("./BaseCard.js");
var _text = require("../utils/text.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class RankCard extends _BaseCard.BaseCard {
  constructor(props) {
    super({
      ...props,
      width: 1920,
      height: 720
    });
    this.width = 1920;
    this.height = 720;
    this.bar = {
      width: 1920,
      height: 30
    };
  }
  async applyBackground() {
    const background = await _jimp.default.read(this.background);
    background.resize(this.width, this.height);
    this.background_obj = background;
    this.lienzo.composite(background, 0, 0);
  }
  async applyOverlay() {
    const overlay = new _jimp.default(this.width, this.height, 0x00000040);
    this.lienzo.composite(overlay, 0, 0);
  }
  async applyProgressBar() {
    const lfont = await _jimp.default.loadFont(_jimp.default.FONT_SANS_64_WHITE);
    const barMargin = 100;
    const barWidth = Math.floor((this.bar.width - barMargin) * eval(this.progress));
    const innerbar = new _jimp.default(barWidth, this.bar.height, _jimp.default.cssColorToHex(this.color));
    const outerbar = new _jimp.default(this.bar.width - barMargin, this.bar.height, _jimp.default.cssColorToHex("#ffffff"));
    this.lienzo.blit(outerbar, barMargin / 2, this.height - (this.bar.height + barMargin / 2));
    this.lienzo.blit(innerbar, barMargin / 2, this.height - (this.bar.height + barMargin / 2));
    this.lienzo.print(lfont, barMargin / 2, this.height - barMargin * 1.5, this.progress);
    this.lienzo.print(lfont, -50, 50, {
      text: this.level || "Level 0",
      alignmentX: _jimp.default.HORIZONTAL_ALIGN_RIGHT,
      alignmentY: _jimp.default.VERTICAL_ALIGN_TOP
    }, this.width, this.height);
  }
  async applyAvatar() {
    const avatar = await _jimp.default.read(this.avatar);
    avatar.resize(480, 480);
    avatar.circle();
    let x = (this.background_obj.getWidth() - avatar.getWidth()) / 8;
    let y = (this.background_obj.getHeight() - avatar.getHeight()) / 2.75;
    this.lienzo.composite(avatar, x, y);
  }
  async applyTexts() {
    const gfont = await _jimp.default.loadFont(_jimp.default.FONT_SANS_128_WHITE);
    const lfont = await _jimp.default.loadFont(_jimp.default.FONT_SANS_64_WHITE);

    // Title
    this.lienzo.print(lfont, 50,
    //(this.background_obj.getWidth() / 8) * 3.5,
    50,
    //this.background_obj.getHeight() / 5,
    {
      text: this.title,
      alignmentX: _jimp.default.HORIZONTAL_ALIGN_LEFT,
      alignmentY: _jimp.default.VERTICAL_ALIGN_TOP
    }, 1920, 1080);

    // Username

    const usernameCanvas = await (0, _text.getTextWithRatio)({
      width: this.width,
      height: this.height,
      text: this.username,
      font: gfont
    });
    const usernameX = this.background_obj.getWidth() / 8 * 3.5;
    const usernameY = this.background_obj.getHeight() / 3.75;
    this.lienzo.composite(usernameCanvas, usernameX, usernameY);
  }
  async build() {
    await this.applyBackground();
    await this.applyOverlay();
    await this.applyProgressBar();
    await this.applyAvatar();
    await this.applyTexts();
  }
}
exports.RankCard = RankCard;