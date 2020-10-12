const numericButtons = document.querySelectorAll('.numeric')
const screenValue = document.querySelector('.valor')
let operando1, operando2, operador, resultado;

function addNumberToScreen(number) {
    
    if (screenValue.textContent == '0') {
        screenValue.textContent = number
        return;
    }

    screenValue.textContent += number


}

function storeOperator(event) {
    
    operando1 = Number(screenValue.textContent)
    operador = event.target.innerText

    screenValue.textContent = '0'

}

function calculate() {

    operando2 = Number(screenValue.textContent)


    switch(operador) {
        case '+':
            resultado = operando1 + operando2
            break
        case '-':
            resultado = operando1 - operando2
            break
        case '*':
            resultado = operando1 * operando2
            break
        case '/':
            resultado = operando1 / operando2
            break
    }

    screenValue.textContent = `= ${resultado}`

}

function cleanEverything() {
    
    operando1 = 0
    operando2 = 0
    operador = null

    screenValue.textContent = '0'
}




