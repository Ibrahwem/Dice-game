console.log("asd");
var num1;
var num2;
for (var i = 1; i <= 2; i++) 
{
    var randomNumber1 = Math.ceil(Math.random() * 6);
    let newsrc = "images/dice" + randomNumber1 + ".png";
    if (i === 1) {
        num1 = randomNumber1;
    } else {
        num2 = randomNumber1;
    }
    document.querySelector(".img" + i).setAttribute("src", newsrc);
}

if (num1 === num2)
    document.querySelector("h1").textContent = "Draw!";
else
if (num1 > num2) {
document.querySelector("h1").innerHTML="🚩 Player1 Wins";
} else {
document.querySelector("h1").innerHTML="Player2 Wins 🚩";

}