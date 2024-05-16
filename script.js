const billInput = document.querySelector(".bill-input");
const tipAmount = document.querySelector("#tip-price");
const peopleNumber = document.querySelector(".people-input");
const totalPrice = document.querySelector("#total-price")
const buttons = document.querySelector(".buttons")
const tipInput = document.querySelector(".tip-input")
const resetButton = document.querySelector(".reset-button")
let billInputValue;
let peopleInputValue;
let selectedTip;
let tipInputValue;

billInput.addEventListener("input", e => {
    billInputValue = Number(e.target.value);
    buttonActive(billInputValue);
});

peopleNumber.addEventListener("input", e => {
    peopleInputValue = Number(e.target.value);
    buttonActive(peopleInputValue);
});

tipInput.addEventListener("input", e => {
    tipInputValue = Number(e.target.value);
    selectedTip = tipInputValue;
    tipAmountFunc();
    totalFunc();
});

buttons.addEventListener("click", e => {
    const btn = e.target.closest(".select-tip");
    if (!btn) {
        return;
    }
    selectedTip = Number(btn.value);

    tipAmountFunc();
    totalFunc();
});

resetButton.addEventListener("click", () => {
    if(!resetButton.classList.contains("active")) {
        return;
    } else {
        billInput.value = "";
        billInputValue = "";
        peopleInputValue = "";
        selectedTip = "";
        peopleNumber.value = "";
        tipAmount.textContent = "0.00";
        totalPrice.textContent = "0.00";
        resetButton.classList.remove("active");
    }
})

function tipAmountFunc() {
    let tipAmountPerson = (billInputValue * (selectedTip / 100)) / peopleInputValue;
    tipAmount.textContent = tipAmountPerson;
}

function totalFunc() {
    let tipAmountPerson = (billInputValue * (selectedTip / 100)) / peopleInputValue;
    let total = (billInputValue / peopleInputValue) + tipAmountPerson;
    totalPrice.textContent = total;
}

function buttonActive(inputValue) {
    if(inputValue == 0) {
        resetButton.classList.remove("active")
    } else {
        resetButton.classList.add("active");
    }
}