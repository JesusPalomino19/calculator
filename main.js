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
        else insertElement(event.key);
      }
    });
}
//   document.getElementById("body").onkeypress = function (e) {
//     console.log(e.key);
//     // switch (e.keyCode) {
//     //   case 48:
//     //   case 49:
//     //   case 50:
//     //   case 51:
//     //   case 52:
//     //   case 53:
//     //   case 54:
//     //   case 55:
//     //   case 56:
//     //   case 57:
//     //     insertElement(e.key);
//     //     break;
//     //   case 47:
//     //   case 42:
//     //   case 45:
//     //   case 43:
//     //     insertElement(e.key);
//     //     break;
//     //   case 13:
//     //     calculate();
//     //     break;
//     // }
//   };
//}

padNumbers();
