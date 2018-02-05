
// drawing elements
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); //CanvasRenderingContext2D

//ball parameters
var ballRadius = 10;	// bal radius
var x = canvas.width/2; // bal (starting) position x 
var y = canvas.height-30; // bal (starting) position y
var dx= -2; //ball speed x
var dy= -2; //ball speed y

//shelf parameters
var shelfHeight = 10;
var shelfWidth = 90;
var shelfX = canvas.width/2 - shelfWidth/2;

//keybindings
var rightPressed = false;
var leftPressed = false;

//brick variables
var brickRowCount = 6;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];


function drawBricks() {

	for(brickColumns = 0; brickColumns < brickColumnCount; brickColumns++ ) {
		bricks[brickColumns] = [];
		for(brickRows = 0; brickRows < brickRowCount; brickRows++){
		var brickX = (brickColumns * (brickWidth + brickPadding)) + brickOffsetLeft;
		var brickY = (brickRows * (brickHeight + brickPadding)) + brickOffsetTop
			bricks[brickColumns][brickRows] = { x: brickX, y: brickY };
			ctx.beginPath();
			ctx.rect(brickX, brickY, brickWidth, brickHeight);
			ctx.fillStyle = '#444444'
			ctx.fill();
			ctx.closePath();

		}
	}
}

console.log(drawBricks);
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
}


function draw() {
	//clear canvas after each frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawShelf();
	drawBricks();
	collisonDetection()
	//movement
	x += dx;
	y += dy;
	//bouncing on top ceiling  die hitting 
	if(y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height - ballRadius){
		if (x > shelfX && x < shelfX + shelfWidth){
			dy = -dy;
		} 

		else if (y + dy > canvas.height){

			alert("Game over!");
			document.location.reload();
		}
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
	if(e.keyCode == 39 || e.keyCode == 68) {  // keycode 39 = right arrow || d
		rightPressed = true;
	} else if(e.keyCode == 37 || e.keyCode == 65) { //keycode = left arrow || a
		leftPressed = true;
	} 
}

function keyUpHandler(e) {
	if(e.keyCode == 39 || e.keyCode == 68) { 
		rightPressed = false;
	} else if(e.keyCode == 37 || e.keyCode == 65) {
		leftPressed = false;
	}
}

function collisonDetection() {
	for(c=0; c < brickColumnCount; c++) {
		for(r=0; r<brickRowCount; r++) {
			var b = bricks[c][r];
			if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
				dy = -dy;
			}
		}
	}

}


setInterval(draw, 10);




