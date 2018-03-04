const { readFileSync } = require('fs');
const [,,fileName] = process.argv;

if (fileName) {
try{
  const data = readFileSync(fileName);
  process.stdout.write(data.toString());
}catch(err) {
  console.log("error", err)
}
} else {
console.log("please pass in a file to read");
process.exit();
};