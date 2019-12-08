"use strict";

const refs = {
  output: document.querySelector(".outputField"),
  calculatorKeys: document.querySelector(".calculator-keys"),
  reset: document.querySelector(".resetBtn")
};
console.log(refs.reset);
const calculator = {
  value: "0",
  sum(a, b) {
    return a + b;
  },
  substruction(a, b) {
    return a - b;
  },
  multiplication(a, b) {
    return a * b;
  },
  division(a, b) {
    return a / b;
  }
};

refs.output.value = 0;

function displayValue(evt) {
  if (evt.target.nodeName === "BUTTON") {
    calculator.value = evt.target.value;
    let getNum = parseFloat(evt.target.value);
    console.log(getNum);
    refs.output.value += evt.target.value;
  }
}

function clearAll() {
  refs.output.value = 0;
}

refs.calculatorKeys.addEventListener("click", displayValue);
refs.reset.addEventListener("click", clearAll);
// refs.output.addEventListener("change", showValue);
