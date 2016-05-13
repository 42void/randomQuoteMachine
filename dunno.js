$(document).ready(function() {

      $("#trigger").click(function() {


        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $("body").css("background-color",hue);
        $("#socialNetworks a").css("background-color",hue);
        $("#newQuote button").css("background-color",hue);
        $("#quotation").css("color",hue);
        $("#author p").css("color",hue);

        // var cmbApi = "http://api.icndb.com/jokes/1"
        //
        // $.getJSON("quotations.js", function(json){
        //     console.log(json.author);
        // });

        $.ajax({
            url: "http://api.icndb.com/jokes/",
            dataType: 'json',
            success: function(results){
                var joke = results.value[Math.floor((Math.random() * 30) + 1)].joke;
                var author = results.value.categories; ///??
                $('.quotation').html(joke);
                $('.author').html(categorie); /// ?
            }
        });


      // $(quotation).html(json.quotations.author);
      });
 });

//var quotations='{"quotations": { "quote": "Jeffrey", "author": "Giraffe"}, }';


// var json=JSON.parse(quotations);
// console.log(json);
// console.log(json.quotations.author);
