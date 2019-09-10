// HTML Canvas Text
// Add text to a canvas that displays today's date
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var textPath = -0;

  function drawText(textPath){
    today = new Date();
      var minutes = today.getMinutes();
      var hour = today.getHours();
      var day = today.getDate();
      var month = today.getMonth()+1;
      var year = today.getFullYear();

      ctx.font = 'bold 16px Verdana';
      ctx.strokeStyle = '#52ce90';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText('Time: ' + hour + ':' + minutes + ' Date: ' + day + '/' + month + '/' + year, textPath, 200);
      ctx.strokeText('Time: ' + hour + ':' + minutes + ' Date: ' + day + '/' + month + '/' + year, textPath, 200);
  }

  // Take the example above and animate the text. It should slide in from left to right
  var updateText = setInterval(function(){
    ctx.clearRect(0,0,500,500);
    drawText(textPath % 650);
    textPath++;
  }, 10);
