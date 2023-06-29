# discord-jimp

yarn

```
yarn add --no-bin-links @k11960/discord-jimp
```

npm

```
npm i --no-bin-links @k11960/discord-jimp
```

# WelcomeCard

### ESM
```js
import { AttachmentBuilder } from "discord.js";
import { WelcomeCard as WelcomeCardBuilder } from "@k11960/discord-jimp";

const WelcomeCard = new WelcomeCardBuilder({
  username: "K1_1960",
  title: "Bienvenid@",
  subtitle: "Ahora somos 15 miembros!",
  avatar:
    "https://cdn.discordapp.com/avatars/838091364344397835/84ad1de4bb1b2a485a2a4584e4804efd.png?size=2048",
  background:
    "https://cdn.discordapp.com/attachments/1122455580381028402/1122456268683096167/29364-1920x1080.jpg",
});

async function main() {
  await WelcomeCard.build();
  const attachment = new AttachmentBuilder(await WelcomeCard.buffer());
  
  channel.send({
    files: [attachment]
  });
}

main();
```

### CJS
```js
const { AttachmentBuilder } = require("discord.js");
const { WelcomeCard: WelcomeCardBuilder} = require("@k11960/discord-jimp");

const WelcomeCard = new WelcomeCardBuilder({
  username: "K1_1960",
  title: "Bienvenid@",
  subtitle: "Ahora somos 15 miembros!",
  avatar:
    "https://cdn.discordapp.com/avatars/838091364344397835/84ad1de4bb1b2a485a2a4584e4804efd.png?size=2048",
  background:
    "https://cdn.discordapp.com/attachments/1122455580381028402/1122456268683096167/29364-1920x1080.jpg",
});

async function main() {
  await WelcomeCard.build();
  const attachment = new AttachmentBuilder(await WelcomeCard.buffer());
  
  channel.send({
    files: [attachment]
  });
}

main();
```

The output looks something like this:

<img src="https://i.imgur.com/lbyy9uF.jpg" width="100%" />

# RankCard

### ESM
```js
import { AttachmentBuilder } from "discord.js";
import { RankCard as RankCardBuilder } from "@k11960/discord-jimp";

const RankCard = new RankCardBuilder({
  username: "K1_1960",
  title: "Rank",
  level: "Level 0",
  progress: "512 / 1500", // progress.
  avatar:
    "https://cdn.discordapp.com/avatars/838091364344397835/84ad1de4bb1b2a485a2a4584e4804efd.png?size=2048",
  background:
    "https://cdn.discordapp.com/attachments/1122455580381028402/1122456268683096167/29364-1920x1080.jpg",
  color: "#5C6BC0", // progress bar color
});

async function main() {
  await RankCard.build();
  const attachment = new AttachmentBuilder(await RankCard.buffer());
  
  channel.send({
    files: [attachment]
  });
}

main();
```

### CJS
```js
const { AttachmentBuilder } = require("discord.js");
const { RankCard: RankCardBuilder } = require("@k11960/discord-jimp");

const RankCard = new RankCardBuilder({
  username: "K1_1960",
  title: "Rank",
  level: "Level 0",
  progress: "512 / 1500", // progress.
  avatar:
    "https://cdn.discordapp.com/avatars/838091364344397835/84ad1de4bb1b2a485a2a4584e4804efd.png?size=2048",
  background:
    "https://cdn.discordapp.com/attachments/1122455580381028402/1122456268683096167/29364-1920x1080.jpg",
  color: "#5C6BC0", // progress bar color
});

async function main() {
  await RankCard.build();
  const attachment = new AttachmentBuilder(await RankCard.buffer());
  
  channel.send({
    files: [attachment]
  });
}

main();
```

The output looks something like this:

<img src="https://i.imgur.com/SVahw9q.jpg" width="100%" />