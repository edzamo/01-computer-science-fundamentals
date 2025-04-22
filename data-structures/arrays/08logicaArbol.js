class BTREE {
    constructor(number) {
      this.number = number;
      this.l = null;
      this.r = null;
    }
  }
  
  let tree = null;
  
  function insertNodeTree(number) {
    const node = new BTREE(number);
  
    if (tree === null) {
      tree = node;
    } else {
      let aux = tree;
      let prev = null;
  
      while (aux !== null) {
        prev = aux;
        if (number < aux.number) {
          aux = aux.l;
        } else {
          aux = aux.r;
        }
      }
  
      if (number < prev.number) {
        prev.l = node;
      } else {
        prev.r = node;
      }
    }
  }
  
  function showTreeInorden(aux) {
    if (aux) {
      showTreeInorden(aux.l);
      process.stdout.write(aux.number + " ");
      showTreeInorden(aux.r);
    }
  }
  
  function showTreePreorden(aux) {
    if (aux) {
      process.stdout.write(aux.number + " ");
      showTreePreorden(aux.l);
      showTreePreorden(aux.r);
    }
  }
  
  function showTreePostorden(aux) {
    if (aux) {
      showTreePostorden(aux.l);
      showTreePostorden(aux.r);
      process.stdout.write(aux.number + " ");
    }
  }
  
  function searchNodeTree(number) {
    let searching = tree;
    let rounds = 0;
  
    while (searching) {
      if (number === searching.number) {
        console.log(`\nNode ${number} found after ${rounds + 1} rounds`);
        return;
      }
  
      if (number < searching.number) {
        searching = searching.l;
      } else {
        searching = searching.r;
      }
      rounds++;
    }
  
    console.log(`\nNode ${number} not found`);
  }
  
  function removeNodeTree(aux, prev) {
    if (aux) {
      removeNodeTree(aux.l, aux);
      removeNodeTree(aux.r, aux);
      console.log("Deleted Node:", aux.number);
  
      if (prev) {
        if (aux.number < prev.number) {
          prev.l = null;
        } else {
          prev.r = null;
        }
      }
  
      if (aux === tree) tree = null;
    }
  }
  
  // ---------------------------------------
  // 🧪 Simulación con datos quemados
  
  function runDemo() {
    console.log("Creating default tree...");
    [5, 4, 9, -2, 8, 0, 3, 6].forEach(insertNodeTree);
  
    console.log("\n📤 Show Inorden:");
    showTreeInorden(tree);
  
    console.log("\n\n📤 Show Preorden:");
    showTreePreorden(tree);
  
    console.log("\n\n📤 Show Postorden:");
    showTreePostorden(tree);
  
    console.log("\n\n🔍 Search for node 8:");
    searchNodeTree(8);
  
    console.log("\n🗑 Removing all nodes...");
    removeNodeTree(tree, null);
  
    console.log("\n✅ Tree after deletion:");
    showTreeInorden(tree);
  }
  
  runDemo();