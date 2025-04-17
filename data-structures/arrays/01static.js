const vowel = ["a", "e", "i", "o", "u"];

function inArrayStatic(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(vowel[index]);
  }
}

function inArrayDynamic(array) {
    console.log("doing array dynamic")
  for (let index = 0; index < 5; index++) {
    array.push(index);
  }
  array.forEach((element) => {
    console.log(element);
  });
}

inArrayStatic(vowel);
inArrayDynamic(vowel);
