const { globSync } = require("glob");
const { exec } = require("child_process");

let paths = globSync(`cjs/**/*.js`).map((x) => {
  return [x, x.split(/\//g).pop().split(/\./g).shift()];
});
paths.forEach(([path, name]) => {
  exec(
    `dts-bundle --name @k11960/discord-jimp --main ${path} --out ${name}.d.ts`,
    (err, s) => {
      if (err) {
        console.log(err);
      } else {
        console.log(s);
      }
    }
  );
});

let espaths = globSync(`esm/**/*.js`).map((x) => {
  return [x, x.split(/\//g).pop().split(/\./g).shift()];
});
espaths.forEach(([path, name]) => {
  exec(
    `dts-bundle --name @k11960/discord-jimp --main ${path} --out ${name}.d.ts`,
    (err, s) => {
      if (err) {
        console.log(err);
      } else {
        console.log(s);
      }
    }
  );
});
