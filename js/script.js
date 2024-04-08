// selezione bottoni con numeri
let numberSelector = document.querySelectorAll(".numbers .shadow");
// selezione bottoni operatore
let operatorSelector = document.querySelectorAll(".symbols .shadow")
// numero nello schermo nero
const screenNumb = document.querySelector(".screen_text");

// ciclo for per assegnare event listener ad ogni bottone
for (let i = 0; i < numberSelector.length; i++) {
    let singleNub = numberSelector[i];
    singleNub.addEventListener("click", btnClick);
}

// ciclo for per assegnare event listener a bottoni operatori
for (let j = 0; j < operatorSelector.length; j++) {
    singleOperator = operatorSelector[j];
    singleOperator.addEventListener("click", btnClick)
}

/**
 * concatena numero input con numero nel display nero
 * @returns {number}
 */
function btnClick() {
    const inputNumb = this.innerHTML;
    console.log(inputNumb);
    const blackScreenResult = `${screenNumb.innerHTML}${inputNumb}`;
    screenNumb.innerHTML = blackScreenResult;
}



