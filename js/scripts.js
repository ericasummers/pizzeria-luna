function Pizza(name) {
  this.userName = name;
  this.sizes = [];
  this.toppings = [];
}

var medium = { name: "medium", price: 8.00 };
var large = { name: "large", price: 10.00 };

// var toppingOptions = {
//   pepperoni: 0.99,
//   sausage: 0.99,
//   mushrooms: 0.49,
//   peppers: 0.39,
//   onions: 0.30,
//   olives: 0.55,
//   ham: 0.89,
//   pineapple: 0.60,
//   spinach: 0.45,
//   bacon: 0.85,
//   extracheese: 0.60
// }

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
var extracheese = { name: "extracheese", price: 0.60 };

Pizza.prototype.sizePricing = function () {
      return (window[this.sizes].price);
}

Pizza.prototype.toppingsPricing = function() {
  this.toppings.forEach(function(topping) {
    alert(topping.this.price);
  });
  // var noPrice = 0;
  // return noPrice += toppingPrice;
  // for (var i=0; i<this.toppings.length; i++) {
    // return toppingPrice += (toppingOptions.window[this.toppings[i]]);
  // }
}

Pizza.prototype.totalPrice = function() {
  return this.sizePricing() + this.toppingsPricing();
}


$(document).ready(function() {
  $("form.order-form").submit(function(event) {
    event.preventDefault();
    $("#chosen-toppings").empty();
    var inputtedName = $("input#user-name").val();
    var newPizza = new Pizza(inputtedName);
    var inputtedSize = $("#pizza-size").each(function() {
      newPizza.sizes.push($(this).val());
    });
    var inputtedToppings = $("input:checkbox[name=topping-options]:checked").each(function() {
      var toppingOptionsChosen = $(this).val();
      newPizza.toppings.push(toppingOptionsChosen);
      $("#chosen-toppings").append("<li>" + toppingOptionsChosen + "</li>");
    });

    $("#namedisplay").text(inputtedName);
    $("#chosen-size").text(newPizza.sizes);

    // var totalPizzaPrice = newPizza.sizePricing() + newPizza.toppingsPricing();
    // var toppingsPriceOnly = inputtedToppings.each(function() {
    //   window[newPizza.toppings].price;
    // });
    alert(newPizza.toppings);
    alert(newPizza.toppingsPricing());

    $(".pizza-price").text(newPizza.totalPrice());

    $("input#user-name").val("");
  });
});
