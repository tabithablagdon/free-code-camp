$(document).ready(function(){

  $("#generate-joke").click(function() {
    $.ajax({
      dataType: 'json',
      url: 'http://api.icndb.com/jokes/random',
      success: function(data) {
          $("#joke").hide().html(data.value.joke).fadeIn("2000");
      }
    });
  });

  $("#tweet").click(function() {
   window.open("http://twitter.com/home/?status=" + $("#joke").text(), '_blank');
  });


  /*  $("#generate-joke").click(function() {
      $("#joke").hide().text(quotes[Math.floor(Math.random() * quotes.length)]).fadeIn(2000);
    });
  */

});
