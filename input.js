const { stdin } = require("process");
const play = require("./play");
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
  switch (key) {
    case "w":
      connection.write("Move: up");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "t":
      connection.write("Say: Hello");
      break;
  }
};

stdin.on("data", handleUserInput);

module.exports = setupInput;
