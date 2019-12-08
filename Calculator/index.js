"use strict";

const refs = {
  output: document.querySelector(".outputField"),
  calculatorKeys: document.querySelector(".calculator-keys"),
  reset: document.querySelector(".resetBtn")
};

const calculator = {
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  value: "0"
};

const performCalculation = {
  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  "=": (firstOperand, secondOperand) => secondOperand
};

function updateDisplay() {
  refs.output.value = calculator.value;
}

function displayValue(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  if (evt.target.classList.contains("operator")) {
    handleOperator(evt.target.value);
    updateDisplay();
    return;
  }
  if (evt.target.classList.contains("period")) {
    inputDecimal(evt.target.value);
    updateDisplay();
    return;
  }
  if (evt.target.classList.contains("resetBtn")) {
    reset(evt.target.value);
    updateDisplay();
    return;
  }
  inputDigit(evt.target.value);
  updateDisplay();
}

function inputDigit(digit) {
  const value = calculator.value;
  if (calculator.waitingForSecondOperand === true) {
    calculator.value = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    if (value === "0") {
      calculator.value = digit;
    } else {
      calculator.value = value + digit;
    }
  }
}

function inputDecimal(point) {
  if (calculator.waitingForSecondOperand) {
    return;
  }
  if (!calculator.value.includes(point)) {
    calculator.value += point;
  }
}

function handleOperator(nextOperator) {
  const inputValue = parseFloat(calculator.value);
  if (calculator.operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (calculator.firstOperand === null) {
    calculator.firstOperand = inputValue;
  }
  if (calculator.operator) {
    const result = performCalculation[calculator.operator](
      calculator.firstOperand,
      inputValue
    );

    calculator.value = String(result);
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function reset() {
  calculator.value = "0";
  calculator.waitingForSecondOperand = false;
  calculator.firstOperand = null;
  calculator.operator = null;
}

refs.calculatorKeys.addEventListener("click", displayValue);
