
const [,,name] = process.argv;



const isVowel = (letter) => {
  console.log(letter);
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
    return true;
  }
  else {
    return false;
  }
};

for (let letter of name) {
  let isVowelBool = setInterval(isVowel, 2000, `${letter}`);
  if ( isVowelBool === true) {
    console.log(`Give me an ${letter}!`);
  }
  else {
    console.log(`Give me a ${letter}!`)
  }
};


console.log("What does that spell??");
console.log(name.toUpperCase());