
function createCards() {
    var cardsId = document.getElementById('cards');
    for(i = 1; i < 10; i++){
      var cardHtmlClass = ''; //Add odd class to change colour
      if ([i]%2==0) {
        cardHtmlClass = 'odd';
      }
      var d = new Date(); //Add random date to card
      d.setDate(d.getDate() + ((Math.random() * 30) + 1));

      //Create cards
      var cardsElement = '<div class="col-sm-4 '+ cardHtmlClass+'" data-cardnumber=' + i +'>'
            +'<h2>This is a test Card for Noroff it is number ' + i + '</h2>'
            +'<h3>By Michael</h3>'
            +'<p>' + d +'</p>'
            +'<a href="#">View on site</a>'
            +'</div>';
      cardsId.innerHTML += cardsElement;
  }
}
createCards();

//Changing the colour with Jquery:
//$( "[data-cardnumber]" ).filter( ":even" ).css( "background-color", "#52ce90" );
//$( "[data-cardnumber]" ).filter( ":even" ).css( "color", "white" );
