class Stock {
    constructor(serialNumber) {
      this.serialNumber = serialNumber;
      this.next = null;
    }
  }
  
  let cheese = null;
  
  function callMenuStack() {
    let option;
  
    do {
      option = parseInt(prompt(
        "\n\nManager of stock:\n" +
        "1 - Show products.\n" +
        "2 - Add products.\n" +
        "3 - Remove products.\n" +
        "4 - Exit.\n" +
        "Type the option:"
      ));
    } while (option < 1 || option > 4);
  
    switch (option) {
      case 1:
        showStack();
        break;
      case 2:
        addElementStack();
        break;
      case 3:
        removeElementStack();
        break;
      case 4:
        console.log("Exiting...");
        break;
    }
  }
  
  function showStack() {
    console.log("\nReport of products in stock");
    console.log("CHEESE:");
  
    let aux = cheese;
  
    while (aux !== null) {
      console.log("Serial number: " + aux.serialNumber);
      aux = aux.next;
    }
  
    callMenuStack();
  }
  
  function addElementStack() {
    const account = parseInt(prompt("How many units of cheese do you want to add?"));
  
    for (let i = 0; i < account; i++) {
      const unity = new Stock(Math.floor(Math.random() * 1000));
      unity.next = cheese;
      cheese = unity;
    }
  
    callMenuStack();
  }
  
  function removeElementStack() {
    const account = parseInt(prompt("How many units of cheese do you want to remove?"));
  
    let aux = cheese;
  
    for (let i = 0; i < account; i++) {
      if (aux === null) {
        console.log("\nStock of cheese is empty");
        break;
      } else {
        cheese = cheese.next;
        aux = cheese;
      }
    }
  
    callMenuStack();
  }
  
  // Iniciar el programa
  callMenuStack();