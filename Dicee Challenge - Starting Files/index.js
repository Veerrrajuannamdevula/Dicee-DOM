var n=Math.floor(Math.random()*6) + 1;
var n1=Math.floor(Math.random()*6) + 1;



document.querySelector("img").setAttribute("src","images/dice"+n+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+n1+".png");

if(n> n1)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(n1 > n)
{
    document.querySelector("h1").innerHTML="player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="draw";
}