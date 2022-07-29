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

const calcular = (operation) => {
  switch (operation) {
    case 1:
      return "El resultado es: ", sumar();

    case 2:
      return "El resultado es: ", restar();

    case 3:
      return "El resultado es: ", dividir();

    case 4:
      return "El resultado es: ", multiplicar();
  }
};

// const escribir = (texto, nuevoNumero) => {
//   if (texto.isNaN()) {
//     texto = 0;
//     document.write("el valor esta en 0");
//   }
//   var viejoNumero = parseInt(texto) * 10;
//   nuevoNumero += viejoNumero;
//   texto = nuevoNumero;
// };

const inputText = document.getElementById("inputText");

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", callback);
function callback() {
  //   let DOM_createp = document.createElement("p");
  //   DOM_createp.innerHTML = `1`;
  //   inputText.appendChild(DOM_createp);
  inputText.value = 2;
}

const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

// btn1.onclick(escribir(inputText.value, 1));
// btn2.onclick(() => {
//   inputText.setAttribute("value", 3);
// });
