class QueueNode {
    constructor(name) {
      this.name = name;
      this.prev = null;
    }
  }
  
  let checkOutCounter = null;
  
  function callMenuQueue() {
    let option;
  
    do {
      option = parseInt(prompt(
        "\nManager of stock:\n" +
        "1 - Show products.\n" +
        "2 - Add product.\n" +
        "3 - Remove product.\n" +
        "4 - Exit.\n" +
        "Type the option:"
      ));
    } while (option < 1 || option > 4);
  
    switch (option) {
      case 1:
        showQueue();
        break;
      case 2:
        addElementQueue();
        break;
      case 3:
        removeElementQueue();
        break;
      case 4:
        console.log("Exiting...");
        break;
    }
  }
  
  function showQueue() {
    console.log("\nCustomers on CheckOutCounter:");
    let aux = checkOutCounter;
    let i = 1;
  
    while (aux !== null) {
      console.log(`Position ${i}: ${aux.name}`);
      aux = aux.prev;
      i++;
    }
  
    callMenuQueue();
  }
  
  function addElementQueue() {
    const name = prompt("Type the name of the new client in the queue:");
    const client = new QueueNode(name);
  
    if (checkOutCounter === null) {
      checkOutCounter = client;
    } else {
      let aux = checkOutCounter;
      while (aux.prev !== null) {
        aux = aux.prev;
      }
      aux.prev = client;
    }
  
    callMenuQueue();
  }
  
  function removeElementQueue() {
    if (checkOutCounter) {
      console.log(`Customer named: ${checkOutCounter.name} was served.`);
      checkOutCounter = checkOutCounter.prev;
    } else {
      console.log("No customers in the queue.");
    }
  
    callMenuQueue();
  }
  
  // Ejecutamos el menú principal
  callMenuQueue();