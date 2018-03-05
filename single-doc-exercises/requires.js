
// File System, gives us access to the file system
// const { readFileSync } = require('fs');

// const fileArg = process.argv[2]; same as:
const [,,fileArg] = process.argv;

// if (fileArg) {
// try{
//   const data = readFileSync(fileArg);
//   process.stdout.write(data.toString());
// }catch(err) {
//   console.log("error", err)
// }
// } else {
// console.log("please pass in a file to read");
// process.exit();
// }

// console.log("this is the synch version");

const { createReadStream, createWriteStream, appendFile, writeFile } = require('fs');
const { Transform, Writable } = require('stream');
const to_uppercase = Transform();
const writeStream = Writable();

to_uppercase._transform = (buffer, _, callback) => {
  callback(null, buffer.toString().toUpperCase());
};

writeStream._write = (buffer, _, next) => {
  writeFile( "messageUppercase.txt", buffer, (err) => {
    if (err) throw err;
    console.log('The data to write was added to the file');
  });
  next();
};

createReadStream(fileArg)
.pipe(to_uppercase)
.pipe(writeStream);