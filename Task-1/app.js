var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");

function generateCoords() {
    var X = Math.floor((Math.random() * 1200) + 10);
    var Y = Math.floor((Math.random() * 445) + 10);
  return [X, Y];
}
function square(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var coords = generateCoords();
    var X = coords[0];
    var Y = coords[1];
    ctx.fillStyle="rgb(225,0,0)";
    ctx.fillRect(X,Y,100,100);
}



    