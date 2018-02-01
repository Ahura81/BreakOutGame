/*
Rechthoek:

ctx.beginPath(); // beginPath() begint of reset het huidige path
ctx.rect(20, 40, 50, 50); //rect() tekent een rechthoek(x, y, breedte, hoogte)
ctx.fillStyle = "#123456"; // kleurt path 
ctx.fill(); // vult path
ctx.closePath(); // sluit het huidige path


Circel:

ctx.beginPath();
ctx.arc(20, 10, 30, 0, Math.PI*2, false); //arc tekent een boog/curve, waarmee circels gecreerd kunnen worden. (x, y, start hoek, eind hoek, radius, teken rchting (false=mwt de klok mee))
ctx.fillStyle = "#567890"; //	
ctx.fill();
ctx.closePath();
*/

// drawing elements
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //CanvasRenderingContext2D

//ball parameters
var ballRadius = 5;	// bal radius
var x = canvas.width/2; // bal starting point x 
var y = canvas.height-30; // bal starting point y
var dx= -2; //ball speed x
var dy= -2; //ball speed y

var shelfHeight;
var shelfWidth;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#111111";
	ctx.fill();
	ctx.closePath();

function drawShelf() {
	ctx.beginPath();
	ctx.rect()
}

}
function draw() {
	//clear canvas after each frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	//movement
	x += dx;
	y += dy;
	//bouncing on bottom || top ceiling 
	if(y + dy > canvas.height - ballRadius|| y + dy < ballRadius) {
		dy = -dy;
	}
	//bouncing of right || left wall
	if(x + dx > canvas.width - ballRadius|| x + dx < ballRadius) {
		dx = -dx;
	}
}



setInterval(draw, 10);




