const screenValue = document.querySelector('.valor')
let operando1, operando2, operador;
let resultado = 0;




function addNumberToScreen(number) {
    
    const contemPonto = screenValue.textContent.includes('.')

    if (screenValue.textContent == '0' && number != '.') {
        screenValue.textContent = number
        return
    }

    if (number == '.' && contemPonto) {
        return 
    }
    
    screenValue.textContent += number



}

function storeOperator(event) {
    
    if (resultado != 0) {
        operando1 = resultado
        operador = event.target.innerText

        screenValue.textContent = '0'

        return
    }

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
    resultado = 0

    screenValue.textContent = '0'
}




