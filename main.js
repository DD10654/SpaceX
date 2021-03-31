function main() {
    window.location = "index.html";
}

function overview() {
    window.location = "overview.html";
}

function capsule() {
    window.location = "capsule.html";
}

function videos() {
    window.location = "videos.html";
}

function engines() {
    window.location = "engines.html";
}

function news() {
    window.location = "news.html";
}

function images1() {
    window.location = "images.html";
}

function websites() {
    window.location = "websites.html";
}

function related() {
    window.location = "related.html";
}

function more() {
    window.location = "more.html";
}

function social() {
    window.location = "social.html";
}

function game() {
    window.location = "canvas.html";
}



canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

space_images_array = ["Space1.jpeg", "Space2.jpeg", "Space3.jpeg", "Space4.jpeg"];
random_no = Math.floor(Math.random() * 4);
console.log(random_no);

background_image =  space_images_array[random_no];
rover_image = "SpaceX Rocket.png";

rover_x = 10;
rover_y = 10;

rover_width = 150;
rover_height = 90;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up() {
    if (rover_y >= 10) {
        rover_y -= 10;
        console.log("When Up arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y += 10;
        console.log("When Down arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 710) {
        rover_x += 10;
        console.log("When Right arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log("When Left arrow was pressed, X was " + rover_x + " and Y was " + rover_y);
        uploadBackground();
        uploadrover();
    }
}