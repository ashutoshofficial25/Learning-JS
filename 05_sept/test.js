class product {
  constructor(title, value) {
    (this.name = title), (this.price = value), (this.discount = 50);
  }
  display() {
    console.log(this.name);
    console.log(this.price);
    console.log(this.discount);
  }
}

let s1 = new product("name", 500);
console.log(s1);
s1.display();
