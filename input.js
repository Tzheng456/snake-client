const { stdin } = require("process");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  switch (key) {
    case key:
      console.log(key);
      break;
  }
};

stdin.on("data", handleUserInput);

module.exports = setupInput;
