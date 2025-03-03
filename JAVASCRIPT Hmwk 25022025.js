function appendtoDisplay(value) {
    document.getElementById("display").value += value;
}

function Calculate() {
    let display = document.getElementById("display").value;
    let lastChar = display.charAt(display.length - 1);
    if (display === "" || isNaN(lastChar)){
        document.getElementById("display").value = "Error";
        return;
    }
    try{
        document.getElementById("display").value = eval(display);
    } 
    catch(error){
        document.getElementById("display").value = "Error";
    }
}

function Clear() {
    document.getElementById("display").value = "";
}

function deleteLast() {
   let display=document.getElementById("display");
   display.value=display.value.slice(0, -1);
}

function appendOperator(operator) {
let display=document.getElementById("display").value;
let lastChar=display.charAt(display.length - 1);

if (display!=="" && !isNaN(lastChar)) {
    appendtoDisplay(operator);
   }
}

function appendDecimal() {
let display = document.getElementById("display").value;
let numbers = display.split(/[\+\-\*\/]/); // Split by operators
if (!numbers[numbers.length - 1].includes(".")) {
    appendtoDisplay(".");
   }
}