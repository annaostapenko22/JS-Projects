"use strict";

const refs = {
  output: document.querySelector(".outputField"),
  calculatorKeys: document.querySelector(".calculator-keys")
};
const calculator = {
  value: "0"
};

function displayValue(evt) {
  if (evt.target.nodeName === "BUTTON") {
    calculator.value = evt.target.value;
    let getNum = Number(evt.target.value);
    refs.output.value = evt.target.value;
  }
}

refs.calculatorKeys.addEventListener("click", displayValue);
// refs.output.addEventListener("change", showValue);
