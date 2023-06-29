const Jimp = require("jimp");
const { BaseCard } = require("./BaseCard.js");
const width = 1920;
const height = 1080;

/**
 * @class
 * Represent a WelcomeCard
 * @extends BaseCard
 */
class WelcomeCard extends BaseCard {
  /**
   * @constructor
   * Create a WelcomeCard.
   * @param {object} WelcomeCardData - Required data for the WelcomeCard.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Apply the background to the card.
   * @return {object} WelcomeCard
   */
  async applyBackground() {
    const background = await Jimp.read(this.background);
    background.resize(width, height);
    this.background_obj = background;
    this.lienzo.composite(background, 0, 0);

    return this;
  }

  /**
   * Apply the overlay (darken background) to the card.
   * @return {object} WelcomeCard
   */
  async applyOverlay() {
    const overlay = new Jimp(width, height, 0x00000040);
    this.lienzo.composite(overlay, 0, 0);
  }

  /**
   * Apply the avatar to the card.
   * @return {object} WelcomeCard
   */
  async applyAvatar() {
    const avatar = await Jimp.read(this.avatar);
    avatar.resize(512, 512);
    avatar.circle();
    const x = (this.background_obj.getWidth() - avatar.getWidth()) / 2;
    const y = (this.background_obj.getHeight() - avatar.getHeight()) / 5;

    this.lienzo.composite(avatar, x, y);

    return this;
  }

  /**
   * Apply the necessary and desired text.
   * @param {string} title - Title text.
   * @param {string} username - Username text.
   * @param {string} subtitle - Subtitle text.
   * @return {object} WelcomeCard
   */
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

    return this;
  }

  /**
   * Build the card executing all the other methods.
   * @return {object} WelcomeCard
   */
  async build() {
    await this.applyBackground();
    await this.applyOverlay();
    await this.applyAvatar();
    await this.applyText(this.title, this.username, this.subtitle);

    return this;
  }
}

module.exports = {
  WelcomeCard: WelcomeCard,
};
