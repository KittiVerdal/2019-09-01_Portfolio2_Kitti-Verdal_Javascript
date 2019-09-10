
 // Connect to the following API 'http://www.amiiboapi.com/api/amiibo/?name=mario' using vanilla JavaScript

 // create function to query API
 function getMario(URL, populateMario) {
   var newRequest = new XMLHttpRequest();
   newRequest.onreadystatechange = function() {
     if (newRequest.readyState === 4) {
       if (newRequest.status === 200) {
         var data = JSON.parse(newRequest.responseText);
         if (populateMario) {
           populateMario(data);
         }
       }
     }
   };
   newRequest.open('GET', URL);
   newRequest.send();
 }

 //Call function
 getMario('http://www.amiiboapi.com/api/amiibo/?name=mario', function(data) {
   console.log(data);
 });
