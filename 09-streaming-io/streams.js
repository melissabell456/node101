const [,,fileName] = process.argv;
const { createReadStream, createWriteStream, appendFile, writeFile } = require('fs');
const { Transform, Writable } = require('stream');
const capitalize = Transform();
const writeStream = Writable();

capitalize._transform = (buffer, _, callback) => {
  callback(null, buffer.toString().toUpperCase());
};

writeStream._write = (buffer, _, next) => {
  writeFile('languages_caps.json', buffer, (err) => {
    if (err) throw err;
    console.log("data added");
  });
  next();
}

createReadStream(fileName)
.pipe(capitalize)
.pipe(writeStream);