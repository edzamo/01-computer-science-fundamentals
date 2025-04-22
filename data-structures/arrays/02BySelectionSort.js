function byBlueSort(list) {
  print(list, " no sort", 0);
  let flag = false;
  let round = 0;

  for (let i = 0; i < list.length; i++) {
    let aux = 0;
    let positionMin = i;
    for (let j = 1+i; j < list.length; j++) {
   
      if (list[positionMin] > list[j]) {
        positionMin = j;
        console.log("minima", list[positionMin])
      }
    }
    aux=list[i];
    list[i]=list[positionMin]
    list[positionMin]=aux;
  }

  print(list, "  sort", 0);
}

function print(param1, param2, param3) {
  console.log(`The list is: ${param1} ${param2} : number of round ${param3}`);
}

const lisNumber = [10, 8, 21, 2, 23];
byBlueSort(lisNumber);
