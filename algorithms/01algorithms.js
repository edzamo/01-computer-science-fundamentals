function condition(a, b) {
  let value = 0;
  while (a > b) {
    b++;
    value++;
  }
  return value;
}

function subtract() {
  let a = 5;
  let b = 1;
  let value = condition(a, b);
  console.log(`The sum is: ${a} - ${b} = ${value}`);
}

function add(a, b) {
  let list = [0];

  for (let index = 0; index < a; index++) {
    list[index] = index;
  }

  for (let index = 0; index < b; index++) {
    list[list.length] = index;
  }

  console.log(`The add is : ${list.length}`);
}

function addAnother(a, b) {
  let list = [];

  for (let index = 0; index < a; index++) list.push(0);
  for (let index = 0; index < b; index++) list.push(0);

  return list;
}

function multiply(a, b) {
  let value = 0;
  while (a) {
    a--;
    value += b;
  }
  console.log(`The Multiply is: ${value}`);
}
function div(a, b) {
  let value = 0;
  while (a >= b) {
    a -= b;
    value++;
  }
  console.log(`The Div is: ${value}`);
}

function verifyPrime(number) {
  let prime = false;
  for (let index = 2; index < number; index++) {
    if (number / index == 0) {
      prime = true;
    } else {
      prime = false;
    }
  }

  console.log(`The number is prime: ${prime}`);
}

// call the function

verifyPrime(4);

add(5, 1);
subtract();
console.log(`The sum another form is: ${addAnother(5, 1).length}`);
multiply(5, 3);
div(4, 2);
