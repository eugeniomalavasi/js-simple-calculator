/**
 * concatena numero input con numero nel display nero
 * @returns {number}
 */
function btnClick() {
    firstNumber = this.innerHTML;
    const blackScreenResult = `${screenNumb.innerHTML}${firstNumber}`;
    screenNumb.innerHTML = blackScreenResult;
    return screenNumb;
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
    
    if (operatorCalc === "+") {
        result = (parseInt(firstNumber) + parseInt(secondNumber));
        console.log(result, typeof result);
    } else if (operatorCalc === "-") {
        result = (parseInt(firstNumber) - parseInt(secondNumber))
        console.log(result);
    }
}


