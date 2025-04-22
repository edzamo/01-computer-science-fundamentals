class ListNode {
  constructor(product, account) {
    this.product = product;
    this.account = account;
    this.next = null;
  }
}

let shoppingList = null;

function showList() {
  console.log("\nShopping List:");
  let item = shoppingList;
  let i = 1;
  while (item !== null) {
    console.log(`\nArticle ${i} in shopping list:`);
    console.log(`${item.product} x${item.account}`);
    item = item.next;
    i++;
  }
}

function insertElementList(product, account, position) {
  const article = new ListNode(product, account);

  if (position === 1 || !shoppingList) {
    article.next = shoppingList;
    shoppingList = article;
  } else {
    let item = shoppingList;
    for (let i = 1; i < position - 1 && item.next !== null; i++) {
      item = item.next;
    }
    article.next = item.next;
    item.next = article;
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function addElementList(callback) {
  showList();

  readline.question("\nType the product you want to buy: ", (product) => {
    readline.question("Type the account: ", (account) => {
      readline.question("Type the position of the new product: ", (position) => {
        insertElementList(product, parseInt(account), parseInt(position));
        callback();
      });
    });
  });
}

function createList(callback) {
  insertElementList("gel", 2, 1);
  insertElementList("orange", 20, 2);
  insertElementList("chocolate", 50, 3);
  console.log("\nDefault articles added to shopping list.");
  callback();
}

function removeElementList(callback) {
  showList();
  readline.question("Type the number of the article you want to remove: ", (number) => {
    number = parseInt(number);
    if (number === 1 && shoppingList !== null) {
      shoppingList = shoppingList.next;
    } else {
      let item = shoppingList;
      for (let i = 1; item !== null && item.next !== null; i++) {
        if (i === number - 1) {
          item.next = item.next.next;
          break;
        }
        item = item.next;
      }
    }
    callback();
  });
}

function callMenuList() {
  console.log("\n\nManager of Shopping List:");
  console.log("1 - Show shopping list.");
  console.log("2 - Add article.");
  console.log("3 - Remove article.");
  console.log("4 - Create default shopping list.");
  console.log("5 - Exit.");

  readline.question("Choose an option: ", (option) => {
    switch (parseInt(option)) {
      case 1:
        showList();
        callMenuList();
        break;
      case 2:
        addElementList(callMenuList);
        break;
      case 3:
        removeElementList(callMenuList);
        break;
      case 4:
        createList(callMenuList);
        break;
      case 5:
        readline.close();
        break;
      default:
        console.log("Invalid option. Try again.");
        callMenuList();
    }
  });
}

callMenuList();