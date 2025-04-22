function countdown(number) {
  console.log("\n" + number);

  if (number > 0) {
    countdown(number - 1);
  } else {
    console.log("\nBOOM");
  }
}

function factorialRecursion(number) {
  if (number > 1) {
    number = number * factorialRecursion(number - 1);
  }
  return number;
}

function hanoi(n, source, dest, aux) {
  if (n > 0) {
    hanoi(n - 1, source, aux, dest);

    console.log(`\nDisk from position ${source} to ${dest}`);

    hanoi(n - 1, aux, dest, source);
  }
}

// Llamada de ejemplo
//hanoi(3, 1, 3, 2); // Cambié a 3 discos para que no imprima tanto
console.log(factorialRecursion(5));
