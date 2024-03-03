import _ from "lodash";

const namesOfProducts = [
    "Brush",
    "Books",
    "Glassess",
    "Bucket",
    "Chilly",
    "Clothes",
];

console.log("Products!");

let products = "";

_.range(0, 5).forEach((val, idx) => {
    products += `<div>${namesOfProducts[val]}</div>`;
});

document.querySelector("#products-isolated").innerHTML = products;
