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


$(document).ready(function() {

  // display number on screen when clicked
  $('.values').on('click', function() {
    var val = $(this).val();
    if (isNaN(val) && isNaN(calc[calc.length-1])) {
      calc[calc.length-1] = val;
    }
    else {
      calc += val;
    }
    $('#screen').val(calc);
  });

  $('#enter').on('click', function() {
    $('#screen').val(eval(calc));
  });

  $('#clearAll').on('click', function() {
    calc = "";
    $('#screen').val(eval(calc));
  });

  $('#clearLast').on('click', function() {
    calc = calc.slice(0, -1);
    $('#screen').val(calc);
  });

});
