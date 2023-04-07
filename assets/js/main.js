"use strict";

let telegram_forms = document.getElementsByClassName('form-callback');
let array_forms = Array.prototype.from(telegram_forms);
console.log(array_forms);

for (let i = 0; i < array_forms.length; i++) {
    console.log(array_forms[i]);
}


// console.log(telegram_forms);

/*
var button = document.querySelector("button");
console.log(button);
  button.addEventListener("click", function() {
    console.log("Кнопка нажата.");
  });
*/