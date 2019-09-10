
 // Connect to the following API 'http://www.amiiboapi.com/api/amiibo/?name=mario'
 // using JQuery. Create a new script file for this example

$(window).on('load', function() {

$.ajax({
  url: "http://www.amiiboapi.com/api/amiibo/?name=mario",
  success: function(result) {
    console.log(result)
  }
});

})
