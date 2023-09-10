var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg1 = "dice" + randomNumber1 + ".png";
var randomimgsource1 = "images/" + randomdiceimg1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg2 = "dice" + randomNumber2 + ".png";
var randomimgsource2 = "images/" + randomdiceimg2;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimgsource1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimgsource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber1 < randomNumber2) 
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
else 
{
    document.querySelector("h1").innerHTML="draw";
}