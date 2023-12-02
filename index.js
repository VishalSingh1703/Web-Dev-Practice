var x1 = Math.floor(Math.random() * 100);
x1 = (x1 % 6) + 1;

var imgName = 'images/dice' + x1 +'.png';

document.getElementById("img1").src = imgName;

var x2 = Math.floor(Math.random() * 100) + 1;
x2 = (x2 % 6) + 1;

var imgName = 'images/dice' + x2 +'.png';

document.getElementById("img2").src = imgName;

if(x1>x2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else if(x1<x2)  {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
} else if(x1 == x2) {
    document.querySelector("h1").innerHTML = "DRAW!!";
}