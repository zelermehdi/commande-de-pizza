//the variables of my code which are: number, type, unit price, discount//

let nombrePizza = 3;
let typePizza = "calzone";
let pu;
let remise;

// the price of each pizza
if (typePizza === "reine") {
  pu = 15;
} else if (typePizza === "calzone") {
  pu = 8;
} else if (typePizza === "fromage") {
  pu = 25;
}
// the different discounts in relation to the quantity
if (nombrePizza >= 5 && nombrePizza < 10) {
  remise = 2;
} else if (nombrePizza > 10) {
  remise = 10;
} else if (nombrePizza < 5) {
  remise = 0;
}
// calculate total price 
let total = pu * nombrePizza - remise;
// different discount and message received in relation to the number of orders
if (nombrePizza >= 5 && nombrePizza < 10) {
  remise = 2;
  document.querySelector("#message").innerHTML = "t'es radin";
  document.querySelector(".radin").style.display ="block";
} else if (nombrePizza > 10) {
  remise = 10;
  document.querySelector("#message").innerHTML = "va faire du sport t'es gros";
  document.querySelector(".gros").style.display ="block";
} else if (nombrePizza < 5) {
  remise = 0;
}

// selector
document.querySelector(".unité").innerHTML = `Prix unitaire : ${pu} €`;
document.querySelector(
  ".type"
).innerHTML = `Vous avez commandé une pizza ${typePizza}`;
document.querySelector(
  ".remise"
).innerHTML = `Vous avez une remise de ${remise} €`;
document.querySelector(".total").innerHTML = `Vous devez payer : ${total} €`;
