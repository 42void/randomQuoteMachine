$(document).ready(function() {

      $("#trigger").click(function() {


        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $("body").css("background-color",hue);
        $("#socialNetworks a").css("background-color",hue);
        $("#newQuote button").css("background-color",hue);
        $("#quotation").css("color",hue);
        $("#author p").css("color",hue);

        $.getJSON("http://quotes.rest/qod.json", function(json) {

               var html = "";

                $.each(function(val) {
       //           html += "<div class = 'cat'>"
       //           html += "<img src = '" + val.imageLink + "'>"
       //           html += "</div>"
                    html += "val.quote"
                    console.log(html);
               });
               $(".quotation").html(html);
             });

      });
 });
