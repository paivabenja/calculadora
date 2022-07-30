const dividir = () => {
  return a / b;
};
const multiplicar = () => {
  return a * b;
};
const sumar = () => {
  return a + b;
};
const restar = () => {
  return a - b;
};

const changeInputValue = (value) => {
  inputText.value = value;
};

const changeInputPlaceholder = (placeholder) => {
  inputText.placeholder = placeholder;
};

const calcular = (texto) => {
  if (selectedOperation == null) return;
  if (texto == "") return;
  number2 = texto;
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  switch (selectedOperation) {
    case "sumar":
      changeInputValue(number1 + number2);
      break;
    case "restar":
      changeInputValue(number1 - number2);
      break;
    case "multiplicar":
      changeInputValue(number1 * number2);
      break;
    case "dividir":
      changeInputValue(number1 / number2);
      break;
  }
  selectedOperation = null;
  changeInputPlaceholder("Alla la calculean");
};

const operar = (texto, operacion) => {
  if (texto == "") return;
  if (selectedOperation != null) return;
  number1 = parseInt(texto);
  changeInputValue("");
  changeInputPlaceholder(number1);
  selectedOperation = operacion;
};

const escribir = (texto, nuevoNumero) => {
  if (texto == "") {
    texto = 0;
  }
  let viejoNumero = parseInt(texto) * 10;
  nuevoNumero += viejoNumero;
  changeInputValue(nuevoNumero);
};

const inputText = document.getElementById("inputText");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

const btnSumar = document.getElementById("btnSumar");
const btnRestar = document.getElementById("btnRestar");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const btnIgual = document.getElementById("btnIgual");

let selectedOperation = null;
let number1 = null;
let number2 = null;

btn1.addEventListener("click", () => {
  escribir(inputText.value, 1);
});
btn2.addEventListener("click", () => {
  escribir(inputText.value, 2);
});
btn3.addEventListener("click", () => {
  escribir(inputText.value, 3);
});
btn4.addEventListener("click", () => {
  escribir(inputText.value, 4);
});
btn5.addEventListener("click", () => {
  escribir(inputText.value, 5);
});
btn6.addEventListener("click", () => {
  escribir(inputText.value, 6);
});
btn7.addEventListener("click", () => {
  escribir(inputText.value, 7);
});
btn8.addEventListener("click", () => {
  escribir(inputText.value, 8);
});
btn9.addEventListener("click", () => {
  escribir(inputText.value, 9);
});
btn0.addEventListener("click", () => {
  escribir(inputText.value, 0);
});

btnSumar.addEventListener("click", () => {
  operar(inputText.value, "sumar");
});
btnRestar.addEventListener("click", () => {
  operar(inputText.value, "restar");
});
btnMultiplicar.addEventListener("click", () => {
  operar(inputText.value, "multiplicar");
});
btnDividir.addEventListener("click", () => {
  operar(inputText.value, "dividir");
});

btnIgual.addEventListener("click", () => {
  calcular(inputText.value);
});
