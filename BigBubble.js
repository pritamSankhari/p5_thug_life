var n=200;
var bubbles=[];

function setup()
{
	var width=1260;
	var height=660;
	createCanvas(width,height);
	
	for(var i=0;i<n;i++)
	{
		bubbles[i]=new BigBubble(width,height,random(20,50));
	}

	stroke(255);     // Set line drawing col to white
  	frameRate(30);
  	background(0);	
  	canvas.style.cursor = 'none';
  	
}



function draw()
{
	background(255);
	for(var i=0;i<n;i++)
	{
		bubbles[i].fadeOut();
		bubbles[i].grow();
		bubbles[i].show();
	}
	

}