let sum = false
let substract = false
let multiply = false
let division = false


let inputText = document.getElementById("input")


function insertElement(element){
    inputText.innerHTML += element
}
function imputCalculate(){
        let string_text = inputText.innerHTML 
        string_text = string_text.replace(/\s+/g, '')
        try {
            eval(string_text)
            inputText.innerHTML = eval(string_text)
        } catch (error) {
            alert("Error de sintaxis")
        }

}

function deleteCalculate(){
    inputText.innerHTML= ' '
}