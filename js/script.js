let numberSelector = document.querySelectorAll(".numbers .shadow");
numberSelector = addEventListener("click", btnClick)

function btnClick() {
    this.style.backgroundColor = "red";
    console.log(this.innerHTML);
}
