/**
 * salva il primo numero inserito e l'operatore aritmetrico all'interno di una variabile e cancello lo schermo
 * @returns {string}
 */
function operatorClick() {
    firstNumber = screenNumb.innerHTML;
    console.log("il primo numero:", firstNumber);
    operatorCalc = this.innerHTML;
    console.log(operatorCalc);
    screenNumb.innerHTML = "";
}


function equalClick() {
    equalOperator = this.innerHTML;
    console.log(equalOperator);
    const secondDataSave = screenNumb.innerHTML; 
    console.log(secondDataSave);
}

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