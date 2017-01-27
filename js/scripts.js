function Pizza(sizes, toppings) {
  this.sizes: [];
  this.toppings: [];
}

var medium = { name: "medium", price: 8.00 };
var large = { name: "large", price: 10.00 };

var pepperoni = { name: "pepperoni", price: 0.99 };
var sausage = { name: "sausage", price: 0.99 };
var mushrooms = { name: "mushrooms", price: 0.49 };
var peppers = { name: "peppers", price: 0.39 };
var onions = { name: "onions", price: 0.30 };
var olives = { name: "olives", price: 0.55 };
var ham = { name: "ham", price: 0.89 };
var pineapple = { name: "pineapple", price: 0.60 };
var spinach = { name: "spinach", price: 0.45 };
var bacon = { name: "bacon", price: 0.85 };
var extra-cheese = { name: "extra-cheese", price: 0.60 };

Pizza.prototype.sizePricing = function () {
  this.sizes.forEach(function(size) {
    return size.price;
  });
}
Pizza.prototype.toppingsPricing = function() {
  this.toppings.forEach(function(topping) {
    return toppings.price;
  });
}


$(document).ready(function() {
  
});
