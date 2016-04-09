/*
JavaScript Calculator Project
Coded by Tee Blagdon

Bugs to fix:
1) Double-clicking operators
2) Operations after the enter sign - using the total

To add:
1) Percentage button
2) Parentheses?

*/

var calc = "";

/*
var number = function(val) {
  calc += Number(val);
  document.getElementById("screen").value = calc;
}
*/


function decimal() {
  calc += ".";
  document.getElementById("screen").value = calc;
}

function add() {
  calc += "+";
  document.getElementById("screen").value = calc;
}

function subtract() {
  calc += "-";
  document.getElementById("screen").value = calc;
}

function divide(){
  calc += "/";
  document.getElementById("screen").value = calc;
}

function multiply() {
  calc += "*";
  document.getElementById("screen").value = calc;
}

function enter() {
  document.getElementById("screen").value = eval(calc);
}

function allClear() {
  calc = "";
  document.getElementById("screen").value = "";
}

function clearLast() {
  calc = calc.slice(0, -1);
  document.getElementById("screen").value = calc;
}

$(document).ready(function() {

  // display number on screen when clicked
  $('.number').on('click', function() {
    var num = $(this).val();
    calc += num;
    $('#screen').val(calc);
  });



});
