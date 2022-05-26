const tip_amount = document.getElementById("tipAmount");
const the_total = document.getElementById("total");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const custom = document.querySelector(".custom");
var btnV;
var billV;
var peopleV;

input1.addEventListener('input', bill);
input2.addEventListener('input', people);
custom.addEventListener('input', btnClick);

function toDecimal(percent) {
    return parseFloat(percent) / 100;
}
function btnClick(id) {
    var btn = document.getElementById(id);
    //make it have a still color and others stay normal
    //set up the custom btn with .tagName
    btnV = btnV = toDecimal(btn.innerHTML);
    calculate();
}
function bill(e) {
    billV = e.target.value;
    calculate();
}
function people(e) {
    peopleV = e.target.value;
    calculate();
}
function calculate() {
    if (btnV === undefined || billV === NaN || peopleV === NaN || billV === undefined || peopleV === undefined) {
        return;
    } else {
        console.log(btnV + ", " + billV + ", " + peopleV);
        tipAmount(btnV, billV, peopleV);
        total(btnV, billV, peopleV);
    }
}
function tipAmount(btn, b, p) {
    let result = (b * btn) / p;
    tip_amount.innerHTML = result.toFixed(2);
}
function total(btn, b, p) {
    let result = (b * (btn + 1)) / p;
    the_total.innerHTML = result.toFixed(2);
}
function reset() {
    input1.value = '';
    input2.value = '';
    tip_amount.innerHTML = '';
    the_total.innerHTML = '';
    //reset buttons too
}