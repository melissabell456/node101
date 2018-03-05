// using synchronous file loading
const { readFileSync } = require('fs');
const [,,fileName] = process.argv;

if (fileName) {
try{
  const data = readFileSync(fileName);
  process.stdout.write(data);
}catch(err) {
  console.log("error", err)
}
} else {
console.log("please pass in a file to read");
process.exit();
};