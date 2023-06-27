"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextWithRatio = getTextWithRatio;
var _jimp = _interopRequireDefault(require("jimp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function getTextWithRatio({
  width,
  height,
  text,
  font
}) {
  const maxLength = 8;
  const defaultRatio = 0.6;
  let length = (text || "Text").length;
  let dynamicRatio = defaultRatio;
  if (length > maxLength) {
    dynamicRatio = length / 12.5;
  } else {
    dynamicRatio = defaultRatio;
  }
  const TextCanvasWidth = width * dynamicRatio;
  const TextCanvasHeight = height * dynamicRatio;
  const deffont = await _jimp.default.loadFont(_jimp.default.FONT_SANS_64_WHITE);
  const TextCanvas = new _jimp.default(TextCanvasWidth, TextCanvasHeight, 0x00000000);
  await TextCanvas.print(font || deffont, 0, 0, {
    text: text || "Text"
  }, TextCanvasWidth, TextCanvasHeight);
  await TextCanvas.resize(width, height);
  return TextCanvas;
}