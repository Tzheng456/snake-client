const { stdin } = require("process");
const play = require("./client");
const { w, s, a, d, t } = require("./constants");
const inputs = { w: w, s: s, a: a, d: d, t: t };
let connection;

const setupInput = function (conn) {
  connection = conn;
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
  connection.write(inputs[key]);
};

stdin.on("data", handleUserInput);

module.exports = setupInput;
