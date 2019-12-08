"use strict";

const refs = {
  output: document.querySelector(".outputField"),
  calculatorKeys: document.querySelector(".calculator-keys"),
  reset: document.querySelector(".resetBtn")
};
console.log(refs.reset);
const calculator = {
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
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

function updateDisplay() {
  refs.output.value = calculator.value;
  console.log(calculator);
}
// updateDisplay();

function displayValue(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  if (evt.target.classList.contains("operator")) {
    // console.log("operator", evt.target.value);
    handleOperator(evt.target.value);
    updateDisplay();
    return;
  }
  if (evt.target.classList.contains("period")) {
    // console.log("period", evt.target.value);
    inputDecimal(evt.target.value);
    updateDisplay();
    return;
  }
  if (evt.target.classList.contains("resetBtn")) {
    console.log("clear all", evt.target.value);
    return;
  }
  console.log("digit", evt.target.value);
  inputDigit(evt.target.value);
  updateDisplay();
}

function inputDigit(digit) {
  const value = calculator.value;
  if (value === "0") {
    calculator.value = digit;
  } else {
    calculator.value = value + digit;
  }
}

function inputDecimal(point) {
  if (!calculator.value.includes(point)) {
    calculator.value += point;
  }
}

function handleOperator(nextOperator) {
  const { value, firstOperand, operator } = calculator;
  const inputValue = parseFloat(value);
  console.log(inputValue);
  if (firstOperand === null) {
    calculator.firstOperand = inputValue;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;

  console.log(operator);
}

refs.calculatorKeys.addEventListener("click", displayValue);
// refs.reset.addEventListener("click", clearAll);
// refs.output.addEventListener("change", updateDisplay);
