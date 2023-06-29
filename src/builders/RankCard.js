const Jimp = require("jimp");
const { BaseCard } = require("./BaseCard.js");
const { getTextWithRatio } = require("../utils/text.js");

class RankCard extends BaseCard {
  constructor(props) {
    super({ ...props, width: 1920, height: 720 });
    this.width = 1920;
    this.height = 720;
    this.bar = {
      width: 1920,
      height: 30,
    };
  }

  async applyBackground() {
    const background = await Jimp.read(this.background);
    background.resize(this.width, this.height);
    this.background_obj = background;
    this.lienzo.composite(background, 0, 0);
  }

  async applyOverlay() {
    const overlay = new Jimp(this.width, this.height, 0x00000040);
    this.lienzo.composite(overlay, 0, 0);
  }

  async applyProgressBar() {
    const lfont = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    const barMargin = 100;
    const barWidth = Math.floor(
      (this.bar.width - barMargin) * eval(this.progress)
    );
    const innerbar = new Jimp(
      barWidth,
      this.bar.height,
      Jimp.cssColorToHex(this.color)
    );
    const outerbar = new Jimp(
      this.bar.width - barMargin,
      this.bar.height,
      Jimp.cssColorToHex("#ffffff")
    );

    this.lienzo.blit(
      outerbar,
      barMargin / 2,
      this.height - (this.bar.height + barMargin / 2)
    );
    this.lienzo.blit(
      innerbar,
      barMargin / 2,
      this.height - (this.bar.height + barMargin / 2)
    );
    this.lienzo.print(
      lfont,
      barMargin / 2,
      this.height - barMargin * 1.5,
      this.progress
    );
    this.lienzo.print(
      lfont,
      -50,
      50,
      {
        text: this.level || "Level 0",
        alignmentX: Jimp.HORIZONTAL_ALIGN_RIGHT,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP,
      },
      this.width,
      this.height
    );
  }

  async applyAvatar() {
    const avatar = await Jimp.read(this.avatar);
    avatar.resize(480, 480);
    avatar.circle();
    let x = (this.background_obj.getWidth() - avatar.getWidth()) / 8;
    let y = (this.background_obj.getHeight() - avatar.getHeight()) / 2.75;

    this.lienzo.composite(avatar, x, y);
  }

  async applyTexts() {
    const gfont = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    const lfont = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);

    // Title
    this.lienzo.print(
      lfont,
      50, //(this.background_obj.getWidth() / 8) * 3.5,
      50, //this.background_obj.getHeight() / 5,
      {
        text: this.title,
        alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP,
      },
      1920,
      1080
    );

    // Username

    const usernameCanvas = await getTextWithRatio({
      width: this.width,
      height: this.height,
      text: this.username,
      font: gfont,
    });

    const usernameX = (this.background_obj.getWidth() / 8) * 3.5;
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

module.exports = {
  RankCard: RankCard,
};
