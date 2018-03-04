const [,,fileName] = process.argv;
const { readFile } = require('fs');

if (fileName) {
  try{
    readFile(fileName, 'utf8', function(err, contents) {
    process.stdout.write(contents.toString());
  });
  }catch(err) {
    console.log("error", err)
  }
  } else {
  console.log("please pass in a file to read");
  process.exit();
  };
 