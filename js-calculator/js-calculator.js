/*
JavaScript Calculator Project
Code by Tee Blagdon

Bugs to fix:
 - Double-clicking operators - should change to last clicked operator
 - Operations after the enter sign - using the total
 - Leading with operators
 - Clearing last and left with operator - won't evaluate

Features to add:
 - After click "Enter", new operations uses the previous total's number as starting value

*/

$(document).ready(function() {

  var calc = "";

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

  // compute total of entries
  $('#enter').on('click', function() {
    $('#screen').val(eval(calc));
  });

  // clear screen - either all or last entry
  $('.clear').on('click', function() {
    calc = $(this).val() === "all" ? "" : calc.slice(0, -1);
    $('#screen').val(calc);
  });

});
