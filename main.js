let sum = false;
let substract = false;
let multiply = false;
let division = false;

let inputText = document.getElementById("input");

function insertElement(element) {
  element = element.toString();

  if (element == -1) {
    let str_operation = "" + inputText.innerHTML;
    inputText.innerHTML = str_operation.substring(0, str_operation.length - 1);
  } else inputText.innerHTML += element;
}
function calculate() {
  let string_text = inputText.innerHTML;
  string_text = string_text.replace(/\s+/g, "");
  string_text = string_text.replace("÷", "/");
  string_text = string_text.replace("x", "*");
  try {
    eval(string_text);
    inputText.innerHTML = eval(string_text);
  } catch (error) {
    alert("Error de sintaxis");
  }
}

function deleteCalculate() {
  inputText.innerHTML = "";
}

function padNumbers() {
  document
    .getElementById("body")
    .addEventListener("keydown", function name(event) {
      if (
        (event.key >= 1 && event.key <= 9) ||
        event.key == "/" ||
        event.key == "*" ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "Enter" ||
        event.key == "Backspace"
      ) {
        if (event.key == "/") insertElement("÷");
        else if (event.key == "Enter") calculate();
        else if (event.key == "Backspace") insertElement(-1);
        else if (event.key == "*") insertElement("x");
        else insertElement(event.key);
      }
    });
}

padNumbers();
