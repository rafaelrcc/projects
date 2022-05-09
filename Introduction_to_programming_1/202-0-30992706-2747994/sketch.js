/*

Officer: 2747994
CaseNum: 202-0-30992706-2747994

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Aquamarine text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(583,429);
	textFont(letterFont);
	textSize(24);
}

function draw()
{
	background(255);

	fill(135,206,250);
	//text("are", 107,125);
	fill(240,128,128);
	//text("is", 317,205);
	fill(0,250,154);
	//text("the", 382,230);
	//text("ment", 174,72);
	//text("I", 496,72);
	fill(240,230,140);
	//text("of", 16,254);
	//text("in", 513,205);
	//text("that", 473,153);
	fill(160,82,45);
	//text("eyes.", 224,205);
	fill(32,178,170);
	//text("ink", 509,177);
	fill(138,43,226);
	//text("si", 208,177);
	fill(222,184,135);
	//text("of", 15,205);
	fill(255,255,0);
	//text("must", 164,153);
	fill(138,43,226);
	//text("your", 47,177);
	fill(220,20,60);
	//text("I", 385,177);
	//text("that", 225,72);
	fill(218,165,32);
	//text("Love", 13,302);
	fill(0,0,205);
	//text("be", 209,153);
	fill(30,144,255);
	//text("arp.", 99,254);
	//text("confession", 14,153);*/
	fill(127,255,212);
	text("chosen", 90,177);
	text("second", 222,99);
	text("April", 306,125);
	fill(148,0,211);
	//text("only", 451,177);
	fill(238,130,238);
	//text("one", 465,99);
	fill(199,21,133);
	//text("when", 343,205);
	fill(219,112,147);
	//text("the", 48,254);
	//text("It", 282,205);
	fill(210,105,30);
	//text("last", 294,177);
	fill(124,252,0);
	//text("a", 420,153);
	//text("lovely", 49,24);
	fill(238,232,170);
	//text("that", 117,230);
	fill(139,69,19);
	//text("Daisy,", 108,24);
	fill(123,104,238);
	//text("voice", 283,230);
	fill(144,238,144);
	//text("person", 359,153);
	//text("May", 356,125);
	fill(255,165,0);
	//text("our", 261,177);
	fill(0,128,128);
	//text("nce", 221,177);
	fill(0,128,0);
	//text("I", 269,72);
	fill(0,255,255);
	//text("your", 240,230);
	//text("Oh", 13,24);
	fill(154,205,50);
	//text("few", 174,99);
	fill(65,105,225);
	//text("knew", 15,99);
	fill(0,139,139);
	//text("my", 430,99);
	//text("true", 505,99);
	fill(178,34,34);
	//text("am", 13,177);
	fill(255,0,0);
	//text("your", 47,205);
	fill(240,128,128);
	//text("alone", 460,205);
	fill(255,105,180);
	//text("your", 338,72);
	fill(0,255,255);
	//text("I", 403,125);
	fill(255,0,255);
	//text("I", 397,205);
	fill(205,133,63);
	//text("saw", 298,72);
	fill(123,104,238);
	//text("green", 162,205);
	fill(173,216,230);
	//text("live", 429,153);
	fill(0,128,128);
	//text("s", 275,99);
	fill(153,50,204);
	//text("se", 142,99);
	//text("darling,", 90,205);
	//text("hear", 190,230);
	fill(250,128,114);
	//text("You", 66,125);
	fill(255,140,0);
	//text("I", 135,153);
	fill(255,165,0);
	//text("th", 493,177);
	fill(128,0,0);
	//text("mo", 155,72);
	fill(0,0,255);
	//text("et", 86,230);
	//text("From", 13,72);
	fill(106,90,205);
	//text("were", 376,99);
	fill(186,85,211);
	//text("h", 89,254);
	fill(135,206,235);
	//text("Ever", 154,177);
	fill(184,134,11);
	//text("sunny", 182,125);
	fill(238,232,170);
	//text("from", 69,99);
	fill(127,255,0);
	//text("?", 108,153);
	fill(176,224,230);
	//text("luckiest", 287,153);
	fill(34,139,34);
	//text("Bob", 13,350);
	//text("music", 502,230);*/
	fill(127,255,212);
	text("a", 475,125);
	fill(250,128,114);
	//text("the", 20,230);
	fill(127,255,212);
	text("date", 333,177);
	text("day", 235,125);
	fill(75,0,130);
	//text("lovely", 381,72);
	fill(0,0,205);
	//text("first", 105,72);
	fill(144,238,144);
	//text("tho", 119,99);
	fill(255,0,255);
	//text("face,", 440,72);
	fill(186,85,211);
	//text("I", 517,153);
	fill(173,216,230);
	//text("kisses,", 107,302);
	fill(255,105,180);
	//text("can", 414,177);
	fill(233,150,122);
	//text("like", 337,230);
	//text("that", 295,99);
	fill(123,104,238);
	//text("am", 426,205);*/
	fill(127,255,212);
	text("in", 279,125);
	fill(147,112,219);
	//text("make", 432,125);
	//text("I", 161,230);
	fill(0,100,0);
	//text("and", 65,302);
	//text("qui", 61,230);
	fill(0,206,209);
	//text("the", 64,72);
	//text("x", 60,350);
	//text("you", 339,99);
	fill(255,215,0);
	//text("blessed", 423,230);
	fill(250,128,114);
	//text("the", 246,153);
	fill(0,139,139);
	//text("my", 147,125);
	fill(255,215,0);
	//text("love.", 17,125);



}
