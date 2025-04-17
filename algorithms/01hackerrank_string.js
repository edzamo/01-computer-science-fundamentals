function vowelsAndConsonants(s) {
  const array = [...s];
  const vowel = ["a", "e", "i", "o", "u"];
  let arrayConstants = [];
  let arrayVowel = [];

  array.forEach((element) => {
    if (vowel.includes(element)) {
      arrayVowel.push(element);
    } else {
      arrayConstants.push(element);
    }
  });

  print(arrayVowel);
  print(arrayConstants);
}

function print(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

function main() {
  const s = "javascriptloops";

  vowelsAndConsonants(s);
}

main();
