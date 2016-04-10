/*
JavaScript Calculator Project
Coded by Tee Blagdon

Bugs to fix:
 - Double-clicking operators (amost done)
 - Operations after the enter sign - using the total

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

  $('.clear').on('click', function() {
    if ($(this).val() === "all") {
      calc = "";
    }
    else {
      calc = calc.slice(0, -1);
    }
    $('#screen').val(calc);
  });

});
