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

var toppingsPrices = [];

Pizza.prototype.sizePricing = function () {
  return (window[this.sizes].price);
}

Pizza.prototype.toppingsPricing = function() {
  this.toppings.forEach(function(topping) {
    toppingsPrices.push(window[topping].price);
  });
  var totalToppingPrices = 0;
  return parseFloat(totalToppingPrices += (toppingsPrices));
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

    alert(newPizza.toppings);

    // var toppingPriceList = newPizza.each(function() {
    //
    // });

    alert(toppingsPrices);

    $(".pizza-price").text(newPizza.totalPrice());

    $("#options-display").show();

    $("input#user-name").val("");
  });

  $("#place-order").click(function() {
    $("#final-results").show();
    $("#options-display").hide();
  });

  $("#clear-order").click(function() {
    $("#final-results").hide();
    $("#options-display").hide();

    $("input#user-name").val("");
    $("inputtedSize").val("");
  });
});
