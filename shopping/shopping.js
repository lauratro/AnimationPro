// For this task we have 2 classes: Product and Basket.
// Add as many products as you want: each product should have a name, price and quantity.
// 1.   Display the available products in the html - include at least the name and the quantity.
// 2.   When the user clicks on one product, you should add the product to the basked (Hint: create a method in the
//      Basket class that pushes the product into the products array).
// 3.   When a user adds a product to the basket, the total quantity of this product should decrease (should this
//      be a method of the Basket or of the Product class?)
// 4.   Everytime a user adds something in its basket, show the content of the basket in the html and show the
//      decreased amount of the product.
// 5.   If a product goes to 0, show that is sold out and don't let anyone clicking on it.
// 6.   Show the total price of the basket (when a user adds something in the basket, the total should be updated).
// 7.   Apply some discount: if a user buys 4 products of the same kind, one is free.
// 8.   Add as many features as you want

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.count = 0;
  }
  status() {
    return (
      "Product: " +
      this.name +
      ", " +
      this.price +
      ", " +
      this.quantity +
      "-in Basket" +
      this.count
    );
  }
  inTheBasket() {
    this.quantity -= 1;
  }
}

class Basket {
  constructor() {
    this.products = [];
    this.finalAmount = 0;
    this.arrayProd = [];
    this.discountAmount;
  }
  addProduct(prod) {
    this.products.push(prod);
    prod.count += 1;
  }
  /*  removeProduct(prod) {
    const index = this.products.indexOf(prod);
    this.products.splice(index, 1);
    prod.count -= 1;
  } */
  statusBasket(prod) {
    return prod.name + " - price: " + prod.price + "-" + prod.count;
  }

  totalAmountCart() {
    let total = [];
    let disc = 0;

    this.products.forEach((prod) => {
      total.push(prod.price);
    });

    this.finalAmount = total.reduce((a, b) => {
      return a + b;
    });
    this.products.forEach((prod) => {
      if (prod.count >= 4) {
        disc = this.finalAmount - prod.price;
      } else {
        disc = this.finalAmount;
      }
    });
    return disc;
  }
  discount() {
    this.products.forEach((prod) => {
      console.log(prod.count);
    });
  }
  /* numberOfProducts() {
    let names = [];
    this.products.forEach((prod) => {
      names.push(prod.name);
    });

    this.arrayProd = names.reduce(function (acc, curr) {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});
    return this.arrayProd;
  }
  discount() {
    let discount1;
    for (let key in this.arrayProd) {
      console.log(this.arrayProd[key]);
      console.log(key);
      this.products.forEach((prod) => {
        if (prod.name == key && this.arrayProd[key] == 2) {
          discount1 = this.finalAmount - prod.price;
        }
      });
      this.discountAmount = discount1;
      return discount1;
    }
  } */
}
let myBasket = new Basket([]);
let myProducts = [
  new Product("apples", 40, 2),
  new Product("lemons", 20, 38),
  new Product("mangos", 44, 67),
  new Product("pineapples", 20, 88),
];

window.onload = () => {
  displayList();
  displayBasket();
};

const displayList = () => {
  let list = document.getElementById("listProducts");

  myProducts.forEach((prod) => {
    // console.log("prod", prod);
    let li = document.createElement("li");
    let addCartButton = document.createElement("button");
    addCartButton.innerHTML = "Add";
    li.innerHTML = prod.status();
    list.appendChild(li);

    list.appendChild(addCartButton);
    //Add product in the cart and decrease quantity
    addCartButton.addEventListener("click", () => {
      addToCart(prod);
      prod.inTheBasket();
      li.innerHTML = prod.status();
      if (prod.quantity === 0) {
        addCartButton.setAttribute("disabled", true);
      }
      // console.log("status", myBasket.products[0].name);
    });
  });
};
console.log("basket", myBasket);

//console.log(myBasket.addProduct(myProducts[0]));
const displayBasket = () => {
  let ul = document.getElementById("cartList");
  let tot = document.getElementById("total");
  ul.innerHTML = "";
  console.log("preloop", myBasket.products);

  myBasket.products.forEach((prod, index) => {
    let li = document.createElement("li");
    li.innerHTML = myBasket.statusBasket(prod);
    /*  let remove = document.createElement("button");
    remove.innerHTML = " Remove";
    remove.addEventListener("click", () => {
      myBasket.removeProduct(prod);
      li.innerHTML = "";
    }); */

    ul.appendChild(li);
  });
  tot.innerHTML = myBasket.totalAmountCart();
};
let addToCart = (prod) => {
  myBasket.addProduct(prod);
  console.log("addmethod", myBasket.products);

  displayBasket();
};
