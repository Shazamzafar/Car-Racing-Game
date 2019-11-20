//Name:     Shazam Zafar
//Class:    JavaScript
//Date:     9 September, 2019
//Project   Car Racing


var timer; // used to reference our setInterval function
var timer1;
var arandomnumber;
//var thediv = document.getElementById("ThisMoves"); // cannot use getElementById here - must be in a function
var thediv; // declare global reference here, then get element in function
var xCoordinate = 0;
 // variables
var btnStart = document.getElementById("btn1");
var btnPause = document.getElementById("btn2");
var btnReset = document.getElementById("btn3");


btnPause.setAttribute("disabled","disabled");
btnReset.setAttribute("disabled","disabled");
 
// function for random number
function GetRandomNum() {
    arandomnumber = Math.random() * 40;
    arandomnumber = Math.ceil(arandomnumber);
    return arandomnumber;
}
 
// function for moving the cars
function StartMoving()
{
    timer = setInterval(MoveTheCar, 500);
    timer1 = setInterval(MoveTheCar2, 500);

    // this suppose to disable  button
    btnStart.setAttribute("disabled","disabled");
    btnPause.removeAttribute("disabled");
    btnReset.removeAttribute("disabled");
}
 
// function for pausing cars
function PauseMoving() {
    clearInterval(timer);
    clearInterval(timer1);

    // this suppose to disable  button
    btnStart.removeAttribute("disabled");
}
 
//function for Resting the cars
function ResetMoving() {
    window.clearInterval(timer);
    window.clearInterval(timer1);
    document.getElementById("car1").style.left = 0;
    document.getElementById("car2").style.left = 0;

    // this suppose to disable  button
    btnPause.setAttribute("disabled","disabled");
    btnReset.setAttribute("disabled","disabled");
    btnStart.removeAttribute("disabled");
}
 
// function and if statement for determining the winner
function CheckWin(width, winnerName){
    if(width >= window.innerWidth - 160){
        if(alert("The winner is "+ winnerName + ". Restart the game?")){
            ResetMoving();
        };
        PauseMoving();
    }
}
 
// function for moving the car 1
function MoveTheCar() {
    thediv = document.getElementById("car1");
    currLeft = thediv.style.left;
    currLeft = currLeft.substr(0, currLeft.length - 2);
    CheckWin(currLeft, "Car 1");
    thediv.style.left = Number(currLeft) + GetRandomNum() + "px";
}
 
// function for moving car 2
function MoveTheCar2() {
    thediv = document.getElementById("car2");
    currLeft = thediv.style.left;
    currLeft = currLeft.substr(0, currLeft.length - 2);
    CheckWin(currLeft, "Car 2");
    thediv.style.left = Number(currLeft) + GetRandomNum() + "px";
}
 
 
