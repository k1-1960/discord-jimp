# discord-jimp

yarn

```
yarn add --no-bin-links @k1-1960/discord-jimp
```

npm

```
npm i --no-bin-links @k1-1960/discord-jimp
```

# WelcomeCard

### ESM
```js
import { WelcomeCard } from "../esm/index.js";

const card = new WelcomeCard({
  username: "K1_1960",
  title: "Bienvenid@",
  subtitle: "Ahora somos 15 miembros!",
  avatar:
    "https://cdn.discordapp.com/avatars/838091364344397835/84ad1de4bb1b2a485a2a4584e4804efd.png?size=2048",
  background:
    "https://cdn.discordapp.com/attachments/1122455580381028402/1122456268683096167/29364-1920x1080.jpg",
});

async function main() {
  await card.build();
  await card.save("esm-test/result.jpg");
}

main();
```

### CJS
```js
const { WelcomeCard } = require("../cjs/index.js");

const card = new WelcomeCard({
  username: "K1_1960",
  title: "Bienvenid@",
  subtitle: "Ahora somos 15 miembros!",
  avatar:
    "https://cdn.discordapp.com/avatars/838091364344397835/84ad1de4bb1b2a485a2a4584e4804efd.png?size=2048",
  background:
    "https://cdn.discordapp.com/attachments/1122455580381028402/1122456268683096167/29364-1920x1080.jpg",
});

async function main() {
  await card.build();
  await card.save("cjs-test/result.jpg");
}

main();
```

The output looks something like this:

<img src="https://i.imgur.com/lbyy9uF.jpg" width="100%" />