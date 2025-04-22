function blueSort(list) {
  print(list, " no sort",0);
  let flag = false;
  let round=0;

  while (!flag) {
    flag = true;
    for (let index = 0; index < list.length; index++) {
      let aux = 0;
      aux = list[index + 1];

      if (list[index] > list[index + 1]) {
        list[index + 1] = list[index];
        list[index] = aux;
        flag = false;
      }
    }
    round ++
  }

  print(list, "  sort", round);
}

function print(param1, param2, param3) {
  console.log(`The list is: ${param1} ${param2} : number of round ${param3}`);
}

const lisNumber = [10, 8, 21, 2, 23];
blueSort(lisNumber);
