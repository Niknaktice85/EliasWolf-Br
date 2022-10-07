const { Soul } = require("matrix.js");

const soul = New Soul({
  ...
});

soul.on("wakeup", (human) => {
  human.goTo("cellphone");
});

soul.linkto(process.env.HUMAN_ID);
