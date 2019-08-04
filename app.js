$(document).ready(function() {

      function randomNumber(){
        return Math.floor(Math.random() * 175) + 1  
      }

      $("#trigger").click(function() {

        var randomColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
        $("body").css("background-color",randomColor);
        $("#socialNetworks a").css("background-color",randomColor);
        $("#newQuote button").css("background-color",randomColor);
        $("#quotation").css("color",randomColor);
        $("#author p").css("color",randomColor);

        $.ajax({
          url: "http://api.icndb.com/jokes/",
          dataType: 'json',
          success: function(results){
            var joke = results.value[Math.floor((Math.random() * 30) + 1)].joke;
            $('.quotation').html(joke);
            var jokeUrl = encodeURIComponent(joke)
            $(".twitter-link").attr("href", `http://twitter.com/intent/tweet?text=${jokeUrl}`)
            }
        });

      });
      $('#trigger').click();
 });