function Pizza(name) {
  this.userName = name;
  this.sizes = [];
  this.toppings = [];
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
var extracheese = { name: "extracheese", price: 0.60 };

Pizza.prototype.sizePricing = function () {
  return (window[this.sizes].price);
}

// Pizza.prototype.toppingPricing = function() {
//   return (window[this.toppings].price);
//   alert(window[this.toppings].price);
// }

var toppingsPrices = [];
Pizza.prototype.allToppingsPricing = function () {
  totalToppingPrices = 0;
  for (var i = 0; i < toppingsPrices; i += 1) {
    totalToppingPrices += toppingsPrices[i];
  }
}

Pizza.prototype.totalPrice = function() {
  return this.sizePricing() + this.toppingPricing();
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

    newPizza.toppings.forEach(function(topping) {
      toppingsPrices.push((window[topping]).price);
    });

    alert(toppingsPrices);

    $(".pizza-price").text(newPizza.sizePricing());

    $("input#user-name").val("");
  });

  $("#place-order").click(function() {
    $("#final-results").show();
    $("#options-display").hide();
  })
});
