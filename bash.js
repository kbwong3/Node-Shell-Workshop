// import { cwd } from 'node:process';
const pwdCommand = require("./pwd.js");
const lsCommand = require("./ls.js");

//Output a prompt
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  lsCommand.ls(data);
  pwdCommand.Afunction(data);
});
// The stdin 'data' event fires after a user types in a line
