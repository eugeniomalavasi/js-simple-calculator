// selezione bottoni con numeri
let numberSelector = document.querySelectorAll(".numbers .shadow");
// selezione bottoni operatore
let operatorSelector = document.querySelectorAll(".symbols .shadow")
// numero nello schermo nero
let screenNumb = document.querySelector(".screen_text");

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
    console.log(screenNumb.innerHTML, "sono input numero");
    return screenNumb;
}

function operatorClick() {
    const operator = this.innerHTML;
    console.log(operator.innerHTML);
    const dataSave = `${screenNumb.innerHTML} ${operator}`;
    console.log(dataSave);
    screenNumb.innerHTML = "";
    return dataSave;

}


