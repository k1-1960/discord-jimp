const Jimp = require("jimp");

class BaseCard {
  constructor(props) {
    this.width = 1920;
    this.height = 1080;

    this.username = "";
    this.background = "";
    this.avatar = "";
    this.title = "";
    this.subtitle = "";

    Object.entries(props).forEach(([x, v]) =>
      Object.defineProperty(this, x, { value: v })
    );
    this.lienzo = new Jimp(this.width, this.height);
  }

  async buffer() {
    return await this.lienzo.getBufferAsync(Jimp.MIME_JPEG);
  }

  async save(route) {
    await this.lienzo.writeAsync(route);
  }
}

module.exports = {
  BaseCard: BaseCard,
};
