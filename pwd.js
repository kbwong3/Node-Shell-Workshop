module.exports.Afunction = (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "pwd") {
    console.log(process.cwd());
  }
  //   process.stdout.write("\nprompt > ");

  //   process.stdout.write('You typed: ' + cmd);
  //
};
