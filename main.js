let sum = false
let substract = false
let multiply = false
let division = false


let inputText = document.getElementById("input")


function insertElement(element){
    if(element==-1){
        let str_operation = ""+inputText.innerHTML
        inputText.innerHTML = str_operation.substring(0,(str_operation.length-1))
    }
    else
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
    inputText.innerHTML= ''
}