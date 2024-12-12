var randomNumber1=Math.floor(Math.random()*6)+1;

var imagesource="./images/dice"+randomNumber1+".png";


var fig1=document.querySelectorAll("img")[0];

fig1.setAttribute("src" , imagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var imagesource1="./images/dice"+randomNumber2+".png";


var fig2=document.querySelectorAll("img")[1];

fig2.setAttribute("src" , imagesource1);

if(imagesource===imagesource1)
{
    document.querySelector("h1").innerHTML="equals";
}
if(imagesource>imagesource1)
{    document.querySelector("h1").innerHTML="player 1 wins";

}
else
    {    document.querySelector("h1").innerHTML="player 2 wins";
    
    }
