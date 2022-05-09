function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(3);

	//robots head
	fill(230, 230, 230);
	ellipse(250, 250, 330, 330);


	//robots eyes
	beginShape();
		fill(117, 142, 79);
		triangle(125, 268, 180, 275, 133, 307);
	endShape();

	beginShape();
		fill(117, 142, 79);
		triangle(315, 275, 370, 268, 365, 307);
	endShape();
	


	

	

	//robots mouth
	noFill();
	arc(250, 250, 330, 50, 0, PI);
}