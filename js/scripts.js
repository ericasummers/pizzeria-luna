function Pizza(name) {
  this.userName = name;
  this.sizes = [];
  this.toppings = [];
}

function Topping(name, price) {
  this.toppingName = name;
  this.price = price;
}

var medium = { name: "medium", price: 8.00 };
var large = { name: "large", price: 10.00 };

var pepperoni = new Topping("pepperoni", 0.99);
var sausage = new Topping("sausage", 0.99);
var mushrooms = new Topping("mushrooms", 0.49);
var peppers = new Topping("peppers", 0.39);
var onions = new Topping("onions", 0.30);
var olives = new Topping("olives", 0.55);
var ham = new Topping("ham", 0.89);
var pineapple = new Topping("pineapple", 0.60);
var spinach = new Topping("spinach", 0.45);
var bacon = new Topping("bacon", 0.85);
var extracheese = new Topping("extracheese", 0.60);

var totalToppingPrices = 0;

Pizza.prototype.sizePricing = function () {
  return (window[this.sizes].price);
}

Pizza.prototype.toppingsPricing = function() {
  this.toppings.forEach(function(topping) {
    return totalToppingPrices += (window[topping].price);
  });
}

Pizza.prototype.totalPrice = function() {
  return this.sizePricing() + totalToppingPrices.toFixed(2);
}

$(document).ready(function() {

  $("#pizza-size").val("");

  $("form.order-form").submit(function(event) {
    event.preventDefault();
    $("#chosen-toppings").empty();
    var inputtedName = $("input#user-name").val();
    var totalToppingPrices = 0;
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
      return (totalToppingPrices += (window[topping].price));
    });


    // var toppingPriceList = newPizza.each(function() {
    //
    // });

    // alert(toppingsPrices);
    //
    $(".pizza-price").text(newPizza.sizePricing() + totalToppingPrices);

    $("#options-display").show();
    $("#final-results").hide();
    $("#pizza-order").hide();

    $("input#user-name").val("");
  });

  $("#place-order").click(function() {
    $("#final-results").show();
    $("#options-display").hide();
    $("#pizza-order").hide();
  });

  $("#clear-order").click(function() {
    $("#final-results").hide();
    $("#options-display").hide();
    $("#pizza-order").show();

    $("input#user-name").val("");
    $("#pizza-size").val("");
    $("input:checkbox").prop('checked',false);
  });
});
