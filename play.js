const { SSL_OP_TLS_D5_BUG } = require("constants");
const net = require("net");
const { stdin } = require("process");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to a game server");
    setInterval(() => {
      // conn.write("Move: up");
    }, 500);

    conn.write("Name: TZ");
  });

  stdin.on("data", handleUserInput);

  return conn;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
};
module.exports = { connect, setupInput };
