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
var ballRadius = 10;	// bal radius
var x = canvas.width/2; // bal starting point x 
var y = canvas.height-30; // bal starting point y
var dx= -2; //ball speed x
var dy= -2; //ball speed y

//shelf parameters
var shelfHeight = 10;
var shelfWidth = 90;
var shelfX = canvas.width/2 - shelfWidth/2;

//keybindings
var rightPressed = false;
var leftPressed = false;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#111111";
	ctx.fill();
	ctx.closePath();
}

function drawShelf() {
	ctx.beginPath();
	ctx.rect(shelfX, canvas.height - shelfHeight, shelfWidth, shelfHeight );
	ctx.fillStyle ='#222222';
	ctx.fill();
	ctx.closePath();
/*
*/
}
function draw() {
	//clear canvas after each frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawShelf();
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
	//shelfMove right
	if(rightPressed && shelfX < canvas.width - shelfWidth) {
		shelfX += 7;

	//shelfMove left
	} else if(leftPressed && shelfX > 0)
		shelfX -= 7;
}




// event listeners for keys
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



function keyDownHandler(e) {
	if(e.keyCode == 39) {  // keycode 39 = right arrow
		rightPressed = true;
	} else if(e.keyCode == 37) {
		leftPressed = true;
	} 
}

function keyUpHandler(e) {
	if(e.keyCode == 39) { 
		rightPressed = false;
	} else if(e.keyCode == 37) {
		leftPressed = false;
	}
}




setInterval(draw, 10);




