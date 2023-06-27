import Jimp from "jimp";

async function getTextWithRatio({ width, height, text, font }) {
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

  const deffont = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  const TextCanvas = new Jimp(TextCanvasWidth, TextCanvasHeight, 0x00000000);

  await TextCanvas.print(
    font || deffont,
    0,
    0,
    {
      text: text || "Text",
    },
    TextCanvasWidth,
    TextCanvasHeight
  );

  await TextCanvas.resize(width, height);
  return TextCanvas;
}

export { getTextWithRatio };
