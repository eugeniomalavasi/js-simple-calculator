let numberSelector = document.querySelectorAll(".numbers .shadow");
console.log(numberSelector);

for (let i = 0; i < numberSelector.length; i++) {
    let singleNub = numberSelector[i];
    singleNub.addEventListener("click", btnClick)
}

function btnClick() {
    
    console.log(this.innerHTML);
}
