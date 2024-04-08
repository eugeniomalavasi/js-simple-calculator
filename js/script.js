// selezione bottoni con numeri
let numberSelector = document.querySelectorAll(".numbers .shadow");
// selezione bottoni operatore
let operatorSelector = document.querySelectorAll(".symbols .shadow")
// numero nello schermo nero
let screenNumb = document.querySelector(".screen_text");
// selezione bottne =
const equalBtn = document.querySelector(".orange");

// ciclo for per assegnare event listener ad ogni bottone
for (let i = 0; i < numberSelector.length; i++) {
    let singleNub = numberSelector[i];
    singleNub.addEventListener("click", btnClick);
}

// ciclo for per assegnare event listener a bottoni operatori
for (let j = 0; j < operatorSelector.length; j++) {
    singleOperator = operatorSelector[j];
    singleOperator.addEventListener("click", operatorClick)
}

/**
 * concatena numero input con numero nel display nero
 * @returns {number}
 */
function btnClick() {
    const inputNumb = this.innerHTML;
    const blackScreenResult = `${screenNumb.innerHTML}${inputNumb}`;
    screenNumb.innerHTML = blackScreenResult;
    console.log(screenNumb.innerHTML);
    return screenNumb;
}

/**
 * salva il primo numero inserito e l'operatore aritmetrico all'interno di una variabile e cancello lo schermo
 * @returns {string}
 */
function operatorClick() {
    const operator = this.innerHTML;
    const firstDataSave = `${screenNumb.innerHTML} ${operator}`;
    console.log(firstDataSave);
    screenNumb.innerHTML = "";
    return firstDataSave;
}

const firstNumbAndOperator = operatorClick();
console.log(firstNumbAndOperator);
// event listener per bottone uguale
equalBtn.addEventListener ("click", equalClick);

function equalClick() {
    equalOperator = this.innerHTML;
    console.log(equalOperator);
    const secondDataSave = `${firstNumbAndOperator}` 
    console.log(secondDataSave);
}