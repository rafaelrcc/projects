/*

Officer: 2747994
CaseNum: 202-0-74404790-2747994

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Light Green text. Only comment out text commands.
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
	createCanvas(641,741);
	textFont(letterFont);
	textSize(35);
}

function draw()
{
	background(255);

	fill(199,21,133);
	text("are", 171,349);
	fill(148,0,211);
	text("my", 230,349);
	fill(32,178,170);
	text("You", 111,349);
	fill(255,215,0);
	text("I", 23,233);
	fill(0,0,255);
	text("only", 121,311);
	text("last", 488,276);
	text("luckiest", 247,233);
	fill(106,90,205);
	text("the", 191,146);
	fill(0,255,255);
	text("in", 425,349);
	fill(0,128,0);
	text("your", 120,276);
	fill(127,255,212);
	text("knew", 155,429);
	text("quiet", 252,146);
	fill(0,128,128);
	text("first", 80,388);
	fill(127,255,212);
	text("true", 333,466);
	fill(218,165,32);
	text("those", 307,429);
	fill(205,133,63);
	text("eye", 24,349);
	fill(50,205,50);
	text("alive", 443,233);
	text("be", 132,233);
	text("you", 88,466);
	fill(255,69,0);
	text("May", 19,105);
	fill(255,127,80);
	text("am", 26,146);
	fill(0,139,139);
	text("of", 417,190);
	fill(0,128,128);
	text("when", 492,105);
	fill(240,128,128);
	text("x", 87,606);
	fill(139,0,139);
	text("from", 234,429);
	fill(173,255,47);
	text("I", 321,388);
	fill(0,128,0);
	text("lovely", 72,35);
	fill(255,99,71);
	text("can", 66,311);
	text("since", 360,276);
	fill(210,105,30);
	text("your", 515,146);
	fill(135,206,250);
	text("I", 113,429);
	text("that", 256,388);
	fill(0,0,139);
	text("gre", 474,311);
	text("must", 65,233);
	fill(240,230,140);
	text("like", 99,190);
	fill(250,128,114);
	text("I", 24,311);
	fill(144,238,144);
	text("date", 545,276);
	text("chosen", 184,276);
	text("a", 192,105);
	fill(139,0,0);
	text("love.", 399,466);
	fill(128,128,0);
	text("voice", 20,190);
	fill(0,206,209);
	text("our", 439,276);
	fill(0,139,139);
	text("From", 536,349);
	fill(0,250,154);
	text("confession", 224,105);
	fill(107,142,35);
	text("few", 389,429);
	fill(152,251,152);
	text("nk", 214,311);
	fill(210,105,30);
	text("lovely", 486,388);
	fill(220,20,60);
	text("face,", 29,429);
	fill(152,251,152);
	text("Oh", 19,35);
	fill(0,128,0);
	text("that", 519,233);
	fill(255,105,180);
	text("saw", 363,388);
	text("s", 539,429);
	text("Love", 19,536);
	fill(0,250,154);
	text("It", 403,105);
	text("make", 130,105);
	fill(255,140,0);
	text("en", 517,311);
	text("Daisy,", 157,35);
	fill(124,252,0);
	text("your", 422,388);
	text("my", 223,466);
	fill(144,238,144);
	text("second", 460,429);
	fill(184,134,11);
	text("s.", 75,349);
	fill(165,42,42);
	text("moment", 154,388);
	fill(178,34,34);
	text("sunny", 281,349);
	text("your", 306,311);
	fill(72,209,204);
	text("am", 71,276);
	text("blessed", 224,190);
	fill(255,69,0);
	text("the", 163,190);
	fill(30,144,255);
	text("I", 29,276);
	fill(34,139,34);
	text("is", 454,105);
	text("kisses,", 156,536);
	fill(127,255,0);
	text("?", 364,105);
	fill(128,0,128);
	text("person", 353,233);
	fill(144,238,144);
	text("April", 464,349);
	fill(255,105,180);
	text("harp.", 525,190);
	fill(255,165,0);
	text("day", 361,349);
	text("Ever", 280,276);
	fill(160,82,45);
	text("hear", 441,146);
	fill(138,43,226);
	text("the", 186,233);
	fill(154,205,50);
	text("darling,", 370,311);
	fill(0,255,127);
	text("one", 274,466);
	fill(186,85,211);
	text("thi", 182,311);
	fill(75,0,130);
	text("were", 143,466);
	fill(147,112,219);
	text("I", 399,146);
	fill(244,164,96);
	text("of", 259,311);
	fill(173,255,47);
	text("music", 340,190);
	fill(147,112,219);
	text("and", 95,536);
	text("that", 334,146);
	fill(139,0,0);
	text("Bob", 19,606);
	text("I", 572,105);
	fill(34,139,34);
	text("in", 152,146);
	fill(244,164,96);
	text("I", 88,105);
	fill(219,112,147);
	text("alone", 75,146);
	fill(244,164,96);
	text("that", 23,466);
	fill(238,232,170);
	text("the", 19,388);
	fill(147,112,219);
	text("the", 464,190);



}
