var n=40;
var particles=[];
var p=[];

var fireBallRadius=50;

function setup()
{
	var width=1260;
	var height=660;
	createCanvas(width,height);
	// for(var j=0;j<n;j++)
	// {
	// 	p[j]=new PointerParticle();
	// }
	stroke(255);     // Set line drawing col to white
  	frameRate(30);
  	background(0);	
  	canvas.style.cursor = 'none';
  	
}
var i=0;
function draw()
{
	background(0);
	//fill(0);
	noFill();
	ellipse(mouseX,mouseY,fireBallRadius);

	var p2=new PointerParticle();
	// p2.setPosition(mouseX,mouseY);
	p.push(p2);

	for(var j=0;j<p.length;j++)
	{
		p[j].setPosition(random(mouseX-fireBallRadius/2,mouseX+fireBallRadius/2),random(mouseY-fireBallRadius/2,mouseY+fireBallRadius/2))
		p[j].update();		
		p[j].show();	
	}
	var p1=new Particle();
	p1.setPosition(mouseX,mouseY);
	particles.push(p1);
	
	
	for(var i=0;i<particles.length;i++)
	{
		particles[i].update();
		particles[i].show();	
	}		
	
	
}