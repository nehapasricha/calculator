const displayElement1 = document.querySelector(".display-1");
const displayElement2 = document.querySelector(".display-2");
const tempResultE1 = document.querySelector(".temp-result");
const numbersE1 = document.querySelectorAll(".number");
const operationE1 = document.querySelectorAll(".operation");
const equalE1 = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const lastEntityClear = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersE1.forEach((num) =>
  num.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }

    dis2Num += e.target.innerText;
    displayElement2.innerText = dis2Num;
  })
);

operationE1.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

equalE1.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  displayElement2.innerText = result;
  tempResultE1.innerText = "";
});

clearAll.addEventListener("click", (e) => {
  displayElement1.innerText = "";
  displayElement2.innerText = "";
  dis1Num = "";
  dis2Num = "";
});

lastEntityClear.addEventListener("click", () => {
  displayElement2.innerText = "";
  dis2Num = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
  } else if (
    e.key === "+" ||
    e.key === "-" ||
    e.key === "/" ||
    e.key === "%" ||
    e.key === "="
  ) {
    clickOperationEl(e.key);
  } else if (e.key === "*") {
    clickOperationEl("X");
  }
});

function clickButtonEl(key) {
  numbersE1.forEach((num) => {
    if (num.innerText === key) {
      num.click();
    }
  });
}

function clickOperationEl(key) {
  operationE1.forEach((op) => {
    if (op.innerText === key) {
      op.click();
    }
  });
}

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  displayElement1.innerText = dis1Num;
  displayElement2.innerText = "";
  dis2Num = "";
  tempResultE1.innerText = result;
}

function mathOperation() {
  switch (lastOperation) {
    case "X": {
      result = parseFloat(result) * parseFloat(dis2Num);
      break;
    }
    case "+": {
      result = parseFloat(result) + parseFloat(dis2Num);
      break;
    }
    case "-": {
      result = parseFloat(result) - parseFloat(dis2Num);
      break;
    }
    case "/": {
      result = parseFloat(result) / parseFloat(dis2Num);
      break;
    }
    case "%": {
      result = parseFloat(result) % parseFloat(dis2Num);
      break;
    }
  }
}
