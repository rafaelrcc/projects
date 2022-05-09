/*

Officer: 2747994
CaseNum: 202-3-23135993-2747994

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all //text commands except
those which produce Medium Slate Blue filled //text with a Saddle Brown outline in Diggity font.
Only comment out //text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(501,322);
	textSize(20);
}

function draw()
{
	background(255);

	fill(30,144,255);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("yours,", 53,190);
	fill(255,0,255);
	stroke(178,34,34);
	textFont(Diggity);
	//text("I", 11,60);
	fill(0,139,139);
	stroke(127,255,0);
	textFont(Melissa);
	//text("I", 123,81);
	fill(30,144,255);
	stroke(0,255,127);
	//text("?", 47,128);
	fill(255,215,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("so,", 97,81);
	fill(0,0,205);
	stroke(107,142,35);
	textFont(RonsFont);
	//text("much", 421,128);
	fill(147,112,219);
	stroke(148,0,211);
	textFont(Diggity);
	//text("x", 46,230);
	fill(240,128,128);
	stroke(255,165,0);
	textFont(Melissa);
	//text("?", 129,150);
	fill(0,100,0);
	stroke(148,0,211);
	textFont(Ballpointprint);
	//text("you", 361,60);
	push();
	fill(184,134,11);
	stroke(255,69,0);
	textFont(Diggity);
	//text("avoiding", 295,81);
	pop();
	stroke(218,165,32);
	//text("secrets,", 171,150);
	fill(148,0,211);
	stroke(50,205,50);
	//text("darling", 33,20);
	fill(0,0,128);
	stroke(218,165,32);
	textFont(Melissa);
	//text("b", 150,106);
	fill(186,85,211);
	stroke(32,178,170);
	//text("delays.", 296,60);
	fill(0,191,255);
	stroke(199,21,133);
	textFont(Ballpointprint);
	//text("and", 185,106);
	fill(123,104,238);
	stroke(0,255,127);
	textFont(Melissa);
	//text("ever", 25,190);
	fill(178,34,34);
	stroke(32,178,170);
	//text("short", 393,60);
	fill(148,0,211);
	stroke(46,139,87);
	//text("some", 221,128);
	push();
	fill(0,250,154);
	stroke(218,165,32);
	textFont(RonsFont);
	//text("how", 384,128);
	pop();
	stroke(0,139,139);
	//text("a", 138,106);
	fill(106,90,205);
	stroke(154,205,50);
	//text("sort", 220,106);
	fill(0,139,139);
	stroke(255,140,0);
	//text("all", 279,106);
	fill(219,112,147);
	stroke(210,105,30);
	textFont(Diggity);
	//text("this", 249,106);
	fill(0,250,154);
	stroke(0,139,139);
	textFont(RonsFont);
	//text("If", 71,81);
	fill(0,0,128);
	stroke(0,191,255);
	textFont(Melissa);
	//text("out.", 295,106);
	fill(238,232,170);
	stroke(160,82,45);
	textFont(RonsFont);
	//text("?", 57,81);
	fill(219,112,147);
	stroke(0,0,255);
	//text("tinual", 239,60);
	fill(139,69,19);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("can", 68,150);
	fill(128,0,128);
	stroke(128,0,0);
	//text("can", 134,81);
	fill(0,0,139);
	textFont(Melissa);
	//text("times.", 249,128);
	fill(0,128,0);
	stroke(0,0,205);
	textFont(RonsFont);
	//text("longer", 68,60);
	fill(107,142,35);
	stroke(210,105,30);
	textFont(Diggity);
	//text("silence.", 256,150);
	fill(34,139,34);
	stroke(255,69,0);
	textFont(Ballpointprint);
	//text("you", 263,81);
	fill(238,130,238);
	stroke(0,191,255);
	//text("me", 350,81);
	fill(106,90,205);
	stroke(124,252,0);
	//text("are", 93,128);
	fill(218,165,32);
	stroke(139,0,0);
	textFont(RonsFont);
	//text("sure", 337,128);
	fill(25,25,112);
	stroke(0,0,255);
	//text("You", 58,128);
	fill(240,230,140);
	stroke(199,21,133);
	textFont(Melissa);
	//text("send", 165,81);
	push();
	fill(222,184,135);
	stroke(139,0,139);
	textFont(RonsFont);
	//text("more", 9,150);
	pop();
	fill(72,209,204);
	stroke(153,50,204);
	textFont(Ballpointprint);
	//text("?", 381,81);
	fill(255,105,180);
	stroke(139,0,0);
	//text("Is", 319,106);
	push();
	fill(147,112,219);
	textFont(Melissa);
	//text("I'm", 286,128);
	pop();
	stroke(255,215,0);
	textFont(Diggity);
	//text("can", 21,60);
	fill(220,20,60);
	stroke(139,0,139);
	textFont(Melissa);
	//text("Are", 337,60);
	fill(128,0,0);
	stroke(0,250,154);
	//text("we", 453,81);
	fill(219,112,147);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("Bob,", 90,20);
	fill(244,164,96);
	stroke(0,255,127);
	textFont(RonsFont);
	//text("our", 349,106);
	fill(0,0,205);
	stroke(210,105,30);
	textFont(Melissa);
	//text("Perhaps", 403,81);
	fill(123,104,238);
	stroke(139,69,19);
	textFont(Diggity);
	text("for", 109,106);
	fill(220,20,60);
	stroke(139,0,139);
	textFont(Melissa);
	//text("take", 99,150);
	fill(186,85,211);
	//text("Daisy", 11,230);
	fill(147,112,219);
	stroke(139,0,0);
	textFont(Diggity);
	//text("Are", 231,81);
	fill(0,0,139);
	stroke(32,178,170);
	textFont(Melissa);
	//text("away", 73,106);
	fill(0,0,128);
	stroke(210,105,30);
	//text("My", 11,20);
	fill(233,150,122);
	stroke(184,134,11);
	textFont(Diggity);
	//text("The", 140,150);
	push();
	fill(123,104,238);
	stroke(139,69,19);
	text("safe", 11,128);
	text("cash", 195,81);
	pop();
	fill(0,206,209);
	stroke(255,140,0);
	//text("relationship", 388,106);
	fill(210,105,30);
	stroke(0,0,128);
	//text("I", 58,150);
	fill(176,224,230);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("these", 167,60);
	fill(0,139,139);
	stroke(0,0,139);
	textFont(Diggity);
	//text("so", 126,128);
	push();
	fill(153,50,204);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("of", 428,60);
	pop();
	fill(144,238,144);
	stroke(220,20,60);
	textFont(Melissa);
	//text("no", 51,60);
	fill(128,0,128);
	stroke(25,25,112);
	textFont(Diggity);
	//text("money", 10,81);
	push();
	fill(106,90,205);
	stroke(139,0,0);
	textFont(RonsFont);
	//text("con", 212,60);
	pop();
	fill(238,232,170);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("guarded", 147,128);
	fill(123,104,238);
	stroke(139,69,19);
	textFont(Diggity);
	text("ignore", 123,60);
	fill(154,205,50);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("not", 308,128);
	fill(135,206,235);
	stroke(0,0,205);
	textFont(Melissa);
	//text("For", 8,190);
	push();
	fill(123,104,238);
	stroke(139,69,19);
	textFont(Diggity);
	text("go", 52,106);
	pop();
	fill(0,255,0);
	stroke(50,205,50);
	textFont(Diggity);
	//text("should", 8,106);
	fill(0,0,128);
	stroke(128,0,0);
	textFont(Melissa);
	//text("reak", 156,106);
	fill(255,215,0);
	stroke(255,165,0);
	//text("the", 233,150);



}
