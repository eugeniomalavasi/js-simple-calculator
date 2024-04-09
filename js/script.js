// selezione bottoni con numeri
let numberSelector = document.querySelectorAll(".numbers .shadow");
// selezione bottoni operatore
let operatorSelector = document.querySelectorAll(".symbols .shadow")
// numero nello schermo nero
let screenNumb = document.querySelector(".screen_text");
// selezione bottone =
const equalBtn = document.querySelector(".orange");
// selezione bottone canc
const cancBtn = document.querySelector(".canc_btn");

// variabile globale per il primo numero
let firstNumber = 0;
// variabile globale per il secondo numero
let secondNumber = 0;
// variabile globale per operatore
let operatorCalc;

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


// event listener per bottone uguale
equalBtn.addEventListener ("click", equalClick);

// event listener per canc button
cancBtn.addEventListener ("click", cancClick);