const fs = require('fs');

module.exports.ls = (data) => {
    const cmd = data.toString().trim(); //remove the newline
  if (cmd === "ls") {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('prompt > ');
        }
    });
  }
  //   process.stdout.write("\nprompt > ");

  //   process.stdout.write('You typed: ' + cmd);
};