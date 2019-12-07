"use strict";

const refs = {
  output: document.querySelector(".outputField"),
  calculatorKeys: document.querySelector(".calculator-keys")
};
const calculator = {
  value: "0"
};

function displayValue(evt) {
  console.log(evt.target.value);
  calculator.value = evt.target.value;
  refs.output.value = calculator.value;
}

refs.calculatorKeys.addEventListener("click", displayValue);
// refs.output.addEventListener("change", showValue);
