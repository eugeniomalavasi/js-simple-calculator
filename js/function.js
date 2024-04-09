/**
 * concatena numero input con numero nel display nero
 * @returns {string}
 */
function btnClick() {
    firstInput = this.innerHTML;
    const firstNumber = `${screenNumb.innerHTML}${firstInput}`;
    screenNumb.innerHTML = firstNumber;
}

/**
 * salva il primo numero inserito e l'operatore aritmetrico all'interno di una variabile e cancello lo schermo
 * @returns {string}
 */
function operatorClick() {
    firstNumber = screenNumb.innerHTML;
    operatorCalc = this.innerHTML;
    console.log(operatorCalc);
    screenNumb.innerHTML = "";
}


/**
 * al click sull'uguale salvare secondo operando
 * @returns {string}
 */
function equalClick() {
    secondNumber = screenNumb.innerHTML; 
    console.log(firstNumber);

    console.log(secondNumber);
    // operazioni aritmetriche
    let result = 0;
    // controllo divisione per 0
    if (operatorCalc === "÷" && secondNumber === "0") {
        result = "non si fa"; 
        screenNumb.innerHTML = result;
    }

    if (operatorCalc === "+") {
        result = (parseInt(firstNumber) + parseInt(secondNumber));
        console.log(result, typeof result);
    } else if (operatorCalc === "-") {
        result = (parseInt(firstNumber) - parseInt(secondNumber))
        console.log(result);
    } else if (operatorCalc === "x") {
        result = (parseInt(firstNumber) * parseInt(secondNumber))
        console.log(result);
    } else if (operatorCalc === "÷" && secondNumber !== "0") {
        result = (parseInt(firstNumber) / parseInt(secondNumber))
        console.log(result);
    }
    // output
    screenNumb.innerHTML = result;
}


function cancClick() {
    screenNumb.innerHTML = "";
}