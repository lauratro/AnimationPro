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
    this.discountAmount = [];
    this.four = [];
  }
  addProduct(prod) {
    this.products.push(prod);
    prod.count += 1;
  }

  statusBasket(prod) {
    return prod.name + " - price: " + prod.price + "-" + prod.count;
  }

  totalAmountCart() {
    let total = [];
    let disc = 0;

    this.products.forEach((prod) => {
      total.push(prod.price);
      //  console.log(prod);

      // console.log("total", total);
      //   this.discount(prod);
    });

    this.finalAmount = total.reduce((a, b) => {
      return a + b;
    });

    return this.finalAmount - this.discountAmount;
  }
  /*   count(count, price) {
    let onsale = 0;
    if (this.products.length > 0) {
      //  console.log("c", count);
      // console.log("p", price);
      if (count == 2) {
        console.log("tot", this.finalAmount);
        onsale = this.finalAmount - price;
      }
    }
    console.log("onsale", onsale);
  } */
  filter() {
    var sumdisc = this.products.filter(function (el) {
      return el.count >= 2;
    });
    console.log("sumdisc", sumdisc);
    let unique = sumdisc.filter(
      (v, i, a) => a.findIndex((t) => t.name === v.name) === i
    );
    console.log("unique", unique);
    let total = 0;
    for (var i = 0; i < unique.length; i++) {
      total += unique[i].price;
    }
    console.log("totaldiscc", total);
    this.discountAmount = total;
  }
  /*  discount(prod) {
    let prodDisc = [];

    this.four.forEach((name) => {
      if (prod.name == name) {
        prodDisc.push(prod.price);
      }
    });
    this.discountAmount = prodDisc;
    console.log("prodD", this.discountAmount);
  } */

  numberOfProducts() {
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
  /*  nested() {
    let count = "count";
    if (this.products.length > 0) {
      const res = this.products.reduce((c, v) => {
        c[v.name] = c[v.name] || {};
        c[v.name][v.price] = c[v.name][v.price] || [v.price];
        c[v.name][v.count] = c[v.name][count] || [v.count];

        return c;
      }, {});
      console.log("res", res);
      for (let key in res) {
        console.log("key", res[key][key]);
      }
    }
  } */

  /* onlyFour() {
    let arrayBig = [];

    for (let key in this.arrayProd) {
      if (this.arrayProd[key] >= 2) {
        arrayBig.push(key);
      }
      this.four = arrayBig;
      console.log("4", this.four);
    }
  } */
  /*   discount() {
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
  //console.log("preloop", myBasket.products);

  myBasket.products.forEach((prod, index) => {
    //  console.log("prod", prod.price);
    let li = document.createElement("li");
    li.innerHTML = myBasket.statusBasket(prod);

    ul.appendChild(li);
    // defineDiscount(prod.count, prod.price);
  });
  tot.innerHTML = myBasket.totalAmountCart();
};
let addToCart = (prod) => {
  myBasket.addProduct(prod);

  // console.log("addmethod", myBasket.products);
  // console.log(myBasket.numberOfProducts());
  // console.log(myBasket.discount(prod));
  //console.log("four", myBasket.onlyFour());
  // console.log("nest", myBasket.nested());
  console.log("new", myBasket.filter());
  // console.log("count", myBasket.count());
  displayBasket();
};
