const WelcomeCard = require("./builders/WelcomeCard");
const RankCard = require("./builders/RankCard");
const text = require("./utils/text");

module.exports = {
  ...WelcomeCard,
  ...RankCard,
  ...text,
};
