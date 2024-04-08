let numberSelector = document.querySelectorAll(".numbers .shadow");
console.log(numberSelector);

// numero nello schermo nero
const screenNumb = document.querySelector(".screen_text");
console.log(screenNumb.innerHTML);

// ciclo for per assegnare event listener ad ogni bottone
for (let i = 0; i < numberSelector.length; i++) {
    let singleNub = numberSelector[i];
    singleNub.addEventListener("click", btnClick);
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


