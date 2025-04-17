function calculateArrowFunction(params) {
  const ascendingArray = [...params].sort((a, b) => a - b);
  const minimum = ascendingArray[0];
  const descendingArray = [...params].sort((a, b) => b - a);
  const maximum = descendingArray[0];
  const sum = params.reduce((total, num) => total + num, 0);
  const average = sum / params.length;

  console.log(
    `The Arrays Minimum is: ${minimum} , Maximum is: ${maximum}  and average is :${average}`
  );
}

function calculate(numbers) {
  let totalSum = 0;
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    totalSum += current;

    if (current > max) {
      max = current;
    }

    if (current < min) {
      min = current;
    }
  }

  const average = totalSum / numbers.length;

  console.log("Maximum:", max);
  console.log("Minimum:", min);
  console.log("Average:", average);
}

const numbers = [1, 5, 7, 9.6, 10, 12];
calculate(numbers);
calculateArrowFunction(numbers);
