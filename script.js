const tip_amount = document.getElementById("tipAmount");
const the_total = document.getElementById("total");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const custom = document.getElementById("custom");
var btnV;
var billV;
var peopleV;

input1.addEventListener('input', bill);
input2.addEventListener('input', people);
custom.addEventListener('input', () => { btnClick("custom"); });

function toDecimal(percent) {
    return parseFloat(percent) / 100;
}
function btnClick(id) {
    var btn = document.getElementById(id);
    if (btn.tagName === "BUTTON") {
        custom.value = "";
        btnV = toDecimal(btn.innerHTML);
    } else if (btn.tagName === "INPUT") {
        btnV = btn.value / 100;
    } else { return; }
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
    if (btnV === undefined || billV === NaN || peopleV === NaN || billV === undefined || peopleV === undefined || billV === "" || peopleV === "") {
        return;
    } else {
        console.log(btnV + ", " + billV + ", " + peopleV);
        tipAmount(btnV, billV, peopleV);
        total(btnV, billV, peopleV);
    }
}
function tipAmount(btn, b, p) {
    let result = (b * btn) / p;
    tip_amount.innerHTML = "$" + result.toFixed(2);
    if (result.toFixed(2).length > 8) {
        tip_amount.style.left = '5em';
        the_total.style.left = '5em';
    }
    else if (result.toFixed(2).length > 6) {
        tip_amount.style.left = '5.6em';
        the_total.style.left = '5.6em';
    }
    else if (result.toFixed(2).length > 4) {
        tip_amount.style.left = '6.3em';
        the_total.style.left = '6.3em';
    }
    else {
        tip_amount.style.left = '7em';
        the_total.style.left = '7em';
    }
}
function total(btn, b, p) {
    let result = (b * (btn + 1)) / p;
    the_total.innerHTML = "$" + result.toFixed(2);
}
function reset() {
    input1.value = '';
    input2.value = '';
    tip_amount.innerHTML = '$0.00';
    the_total.innerHTML = '$0.00';
    tip_amount.style.left = '7em';
    the_total.style.left = '7em';
    custom.value = '';
    btnV = undefined;
}