// import { cwd } from 'node:process';
const pwdCommand = require("./pwd.js");

//Output a prompt
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  pwdCommand.Afunction(data);
});
// The stdin 'data' event fires after a user types in a line
