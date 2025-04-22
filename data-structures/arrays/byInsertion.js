function byInsertion() {
    let v = [7, 28, 2, 53, 16, 13, 45, 345, 2345, 234, 35235, 123, 4346, 75, 4, 7, 3, 68, 2, 6, 63, 2, 0, 68, 436, 12, 343, 54, 25, 13, 15, 2, 97, 81, 981, 618, 61, 3280, 18, 5, 78, 23, 81, 65, 84, 72, 95];
  
    console.log("Antes de ordenar:");
    console.log(v.join(" "));
  
    for (let i = 1; i < v.length; i++) {
      let aux = v[i];
      let j = i - 1;
  
      while (j >= 0 && v[j] > aux) {
        v[j + 1] = v[j];
        j--;
      }
  
      v[j + 1] = aux;
    }
  
    console.log("Después de ordenar:");
    console.log(v.join(" "));
  }
  
  byInsertion();