//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/

function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(1000,1000);
}

function draw()
{
    
    //this command clears the background to black (try changing the numbers)
    background(40,40,20);
    
    //change the fill color
    fill(255,0,0);
    
    //change the outline color
    stroke(0,10,0);
    
    //this command draws a rectangle with the outline and fill colors that we just set
    rect(50,125,250,250);

    //this command draws a circle with the outline and fill colors that we just set
    ellipse(500,399,100,100);

    //this command draws a line with the outline color that we just set
    line(230,100,500,500);
    
}