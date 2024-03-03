import _ from "lodash";

console.log("Cart!");

const cartItems = `<h4>You have ${_.random(1, 20)} items in your cart.</h4>`;

document.querySelector("#cart-isolated").innerHTML = cartItems;
