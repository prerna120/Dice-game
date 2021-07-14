var no1 = Math.floor(Math.random()*6)+1;
var no2 = Math.floor(Math.random()*6)+1;

// displays result in heading according to the dice numbers 

if(no1>no2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(no1<no2){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}

// Changing the images of dice according toh the number obtained

var playerList = document.querySelectorAll("img");
var noList=[no1,no2];

for(var i=0;i<2;i++){
    var dest="images/dice"+noList[i]+".png";
    playerList[i].setAttribute("src",dest);
}