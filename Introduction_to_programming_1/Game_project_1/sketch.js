/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
	noLoop()

}

function sorte(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
  }

function cloud (_x,_y) {

	fill(sorte(170,200), 199, 179);
	ellipse(_x, _y, 50, 50);
	ellipse(_x-20, _y, 50, 50);
	ellipse(_x-40, _y, 50, 50);
	ellipse(_x-60, _y, 50, 50);
	};

function coin(_x,_y) {
	noStroke();
	fill(255, 255, 0);
	ellipse(_x, _y, 30, 30);
	noStroke();
	fill(225, 210, 100);
	ellipse(_x, _y, 23, 23);
	}

function tree () {
	fill(160, 82, 45);
	rect(800, 232, 30, 200);
	rect(750, 262, 80, 15);
	rect(810, 292, 80, 15);
	rect(780, 310, 50, 15);
	fill(0,100,0);
	rect(710,232, 50, 30);
	rect(880,262, 50, 30);
	rect(780,212, 80, 30);
	rect(760,280, 30, 30);

}


function mountain () {
	fill(155,155,155,220);
	triangle(497,128, 330, 522, 760, 522)
	fill(255,255,255);
	triangle(497,128, 474, 177,524,168)
	
}

function dino () {
	// 
	noStroke();

	/* orelha menor
  	fill(71, 117, 112);
  	rect(200, 330, 10, 30);
  	rect(229,330,15,15); */
  
    // cabeca
  	fill(80, 135, 132);
  	rect(200,360,50,40);
  	rect(203, 368, 20, 80);
  
 	/* orelha maior
  	fill(80, 135, 132);
  	ellipse(180,100,30,15);
  	rect(175, 100, 10, 40); */
  
	// olho
  	fill(74, 74, 74);
  	ellipse(220,380,10,20);
  
	// patas da frente
  	fill(71, 117, 112);
  	rect(160, 444, 20, 50);
  	rect(205, 454, 20, 40);
  
  	// patas de tras
  	fill(80, 135, 132);
	rect(149, 444, 20, 50);
  	rect(195, 444, 20, 50);
 
   	// corpo
    fill(80, 135, 132);
    rect(150,430,75,40);
};

function draw()
{	


	// draw sky
	background(255, 170, 129); 

	noStroke();


	// canyon background
	
	// draw ground
	noStroke();
	fill(155,46,49);
	rect(0, 432, 1024, 144); 

	// draw a canyon 
	noStroke();
	fill(255, 170, 129);
	rect(100, 432, 330, 500);
	mountain();
	noStroke();
	fill(155,46,49);
	rect(100, 492, 330, 500);
	rect(430, 432, 1024, 144); 





	//draw clouds
	cloud(sorte(200,1000), sorte(50,300));
	cloud(sorte(50,1000), sorte(50,300));
	cloud(sorte(0,1000), sorte(50,300));
	cloud(sorte(50,1000), sorte(50,300));
	cloud(sorte(0,1000), sorte(50,300));
	cloud(sorte(0,1000), sorte(50,400));
	cloud(sorte(100,1000), sorte(50,400));
	cloud(sorte(50,1000), sorte(50,400));
	cloud(sorte(100,1000), sorte(50,400));
	cloud(sorte(50,1000), sorte(50,400));
	cloud(sorte(0,1000), sorte(50,400));
	cloud(sorte(50,1000), sorte(50,400));
	cloud(sorte(0,1000), sorte(50,400));
	cloud(sorte(50,1000), sorte(50,400));
	cloud(sorte(100,1000), sorte(50,400));
	cloud(sorte(50,800), sorte(50,400));

	
	// draw coins 
	coin(100,400);
	coin(140,400);
	coin(180,400);
	coin(220,400);
	coin(260,400);
	coin(300,400);

	// draw trees
	tree();
	dino();

	
}

