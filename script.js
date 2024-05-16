const billInput = document.querySelector(".bill-input");
const tipAmount = document.querySelector("#tip-price");
const peopleNumber = document.querySelector(".people-input");
const totalPrice = document.querySelector("#total-price")
const buttons = document.querySelector(".buttons")
const tipInput = document.querySelector(".tip-input")
let billInputValue;
let peopleInputValue;
let selectedTip;
let tipInputValue;

billInput.addEventListener("input", e => {
    billInputValue = Number(e.target.value);
});

peopleNumber.addEventListener("input", e => {
    peopleInputValue = Number(e.target.value);
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

function tipAmountFunc() {
    let tipAmountPerson = (billInputValue * (selectedTip / 100)) / peopleInputValue;
    tipAmount.textContent = tipAmountPerson;
}

function totalFunc() {
    let tipAmountPerson = (billInputValue * (selectedTip / 100)) / peopleInputValue;
    let total = (billInputValue / peopleInputValue) + tipAmountPerson;
    totalPrice.textContent = total;
}