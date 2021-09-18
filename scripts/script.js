
// 3 buttons + displayed number

let buttonAdd = document.createElement("button");
let add = document.createTextNode("+");
buttonAdd.appendChild(add);
document.getElementById("counter").appendChild(buttonAdd);
buttonAdd.classList.add("button-add");


let number = document.createElement("p");
let numberCounter = document.createTextNode("0");
number.appendChild(numberCounter);
document.getElementById("counter").appendChild(number);
number.classList.add("number");


let buttonRemove = document.createElement("button");
let remove = document.createTextNode("-");
buttonRemove.appendChild(remove);
document.getElementById("counter").appendChild(buttonRemove);
buttonRemove.classList.add("button-remove");


let buttonReset = document.createElement("button");
let reset = document.createTextNode("RESET");
buttonReset.appendChild(reset);
document.getElementById("counter").appendChild(buttonReset);
buttonReset.classList.add("button-reset");

let result = 0;


// Events

buttonAdd.addEventListener("click", function () {
  result = result + 1;
  number.innerHTML = result;
});


buttonRemove.addEventListener("click", function () {
  result = result - 1;
  number.innerHTML = result;
});


buttonReset.addEventListener("click", function () {
  result = 0;
  number.innerHTML = result;
});
