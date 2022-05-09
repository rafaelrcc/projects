//variables 
var groundHeight;
var mountain1;
var mountain2;
var tree;
var moon;
var sun;
var darkness;
var changeSky;
var ground;
var stars;
var clouds;

// function tree (x_tree, y_tree, w_tree, h_tree) {
// 	fill(160, 82, 45);
// 	rect(x_tree, y_tree, w_tree, h_tree);
// 	rect(x_tree - 50, y_tree + 30, w_tree + 50, h_tree - 185);
// 	rect(x_tree + 10, y_tree + 60, w_tree + 50, h_tree - 185);
// 	rect(x_tree - 20, y_tree + 78, w_tree + 50, h_tree - 185);
// 	fill(0, 100,0);
// 	rect(x_tree - 90, y_tree, w_tree + 20, h_tree - 170);
// 	rect(x_tree + 80, y_tree + 30, w_tree + 20, h_tree - 170);
// 	rect(x_tree - 20, y_tree - 20, w_tree + 50, h_tree - 170);
// 	rect(x_tree - 40, y_tree + 48, w_tree, h_tree - 170);
// } 


function setup() {
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	frameRate(120);

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
		
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	// //initalise the tree object
	// tree = {
	// 	x: 150,
	// 	y: groundHeight + 20,
	// 	trunkWidth: 40,
	// 	trunkHeight: 150,
	// 	canopyWidth: 120,
	// 	canopyHeight: 100
	// };

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 800,
		y: 10,
		diameter: 80,
		brightness: 1
	};


	// stars = {
	// 	x: sorte(0, width),
	// 	y: sorte(0, groundHeight),
	// 	diameter: 3,
	// 	brightness: 1
	// };
		
	
}


function draw() {
	//TASK: update the values for the moons brightness, the sun's position and the
	//darkness.
	/*You can either map this to the mouse's location (i.e. the futher left the 
	mouse is the more daylight) or you can just change the values gradually over 
	time.*/
	
	sun.x = map(mouseX, 0, width, 0, width);
	sun.y = (mouseX ^ 2);
	moon.x = map(mouseX, groundHeight, width - 30 , width - 80, 0);
	moon.y = (groundHeight) - (mouseX ^ 2 / 10) + groundHeight;


	//draw the sky
	noStroke(); //don't draw a border
		if (mouseX < groundHeight + 16) { // makes the day transitions to night by changing the background colour
  		background((225 + mouseX * 0.072),(246 + mouseX * (- 0.33)),255+ mouseX * (- 0.38));
		
	} 
		if (mouseX > groundHeight + 16) {
		background((255 + (mouseX - 450) * - 3.58),(94 + (mouseX - 450)  * - 0.524),(83 +(mouseX - 450) * 0.132));

	}
		else if (mouseX > 500) {
		background(106,13,131);
	
	}

		
	//draw the sun with changing colours
	fill((255+ mouseX * 0.072),(255 + mouseX * (- 0.33)), 0);
	ellipse(sun.x, sun.y, sun.diameter);

	//TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour

	//draw the moon 
	fill(255, 255, 180, moon.brightness * 255);
	ellipse(moon.x, moon.y, moon.diameter);

	//draw the ground and make it green
	fill((70 + mouseX * (- 0.15)), (200 + mouseX * (- 0.3311)), (0));
	rect(0, groundHeight, width, height - groundHeight);

	// set moon brightness
	moon.brightness = map(mouseX, 0, width, 0, 1);
	stars.brightness = map(mouseX, 0, width, 0, 1);


	if (mouseX > groundHeight + 16) {
		fill(250, 250, 250, stars.brightness * 130);
		ellipse(10,20, 5,);
		ellipse(256,334, 5);
		ellipse(92,282, 3);
		ellipse(707,84, 3);
		ellipse(364,12, 3);
		ellipse(797,408, 3);
		ellipse(223,194, 3);
		ellipse(15,326, 3);
		ellipse(174,371, 3);
		ellipse(782,265, 3);
		ellipse(327,210, 3);
		ellipse(623,346, 6);
		ellipse(791,363, 3);
		ellipse(501,139, 3);
		ellipse(715,119, 3);
		ellipse(259,28, 3);
	}
		
	//draw the mountains
	noStroke();
	fill(120 + mouseX * -0.092);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
		
		fill(34, 24, 20)
		rect(100,100,100,100)
			
}