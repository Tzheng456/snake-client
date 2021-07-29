const connect = require("./play");
const setupInput = require("./input");
console.log("Connecting ...");
let connectObj = connect();
setupInput(connectObj);
