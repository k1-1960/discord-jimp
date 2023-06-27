import Jimp from "jimp";
import { BaseCard } from "./BaseCard.js";
const width = 1920;
const height = 1080;

class WelcomeCard extends BaseCard {
  constructor(props) {
    super(props);
  }

  async applyBackground() {
    const background = await Jimp.read(this.background);
    background.resize(width, height);
    this.background_obj = background;
    this.lienzo.composite(background, 0, 0);
  }
  async applyOverlay() {
    const overlay = new Jimp(width, height, 0x00000040);
    this.lienzo.composite(overlay, 0, 0);
  }
  async applyAvatar() {
    const avatar = await Jimp.read(this.avatar);
    avatar.resize(512, 512);
    avatar.circle();
    const x = (this.background_obj.getWidth() - avatar.getWidth()) / 2;
    const y = (this.background_obj.getHeight() - avatar.getHeight()) / 5;

    this.lienzo.composite(avatar, x, y);
  }
  async applyText(title, username, subtitle) {
    const gfont = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    const lfont = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

    this.lienzo.print(
      gfont,
      0,
      (this.lienzo.getHeight() / 10) * 6,
      {
        text: title,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        size: 1024,
      },
      1920,
      1080
    );
    this.lienzo.print(
      lfont,
      0,
      (this.lienzo.getHeight() / 10) * 7.25,
      {
        text: username,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        size: 1024,
      },
      1920,
      1080
    );
    this.lienzo.print(
      lfont,
      0,
      (this.lienzo.getHeight() / 10) * 8,
      {
        text: subtitle,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        size: 1024,
      },
      1920,
      1080
    );
  }
  async build() {
    await this.applyBackground();
    await this.applyOverlay();
    await this.applyAvatar();
    await this.applyText(this.title, this.username, this.subtitle);
  }
}

export { WelcomeCard };
