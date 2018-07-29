
//Only Blues
// 	colr:random(0,90),
// 	colg:random(0,0),
// 	colb:random(100,150),

//All Colors
// 	colr:random(0,100),
// 	colg:random(0,100),
// 	colb:random(0,100),
	



class MovingColor{
	
	constructor(cwidth,cheight)
	{
		this.radius=30;
		this.x=random(1,cwidth);
		this.y=random(1,cheight);
		this.dx=random(-5,5);
		this.dy=random(-5,5);
		this.colr=random(0,90);
		this.colg=random(0,0);
		this.colb=random(100,150);
	}

	show()
	{
		noStroke();
		fill(this.colr,this.colg,this.colb,50);
		ellipse(this.x,this.y,this.radius,this.radius);
	}
	
	move(cwidth,cheight)
	{
		if(this.x>=width-this.radius||this.x<this.radius)
		{
			this.dx=-this.dx;
		}
		this.x+=this.dx;
		if(this.y>=height-this.radius||this.y<this.radius)
		{
			this.dy=-this.dy;
		}
		this.y+=this.dy;
		
	}
	
	flow()
	{
		this.x+=random(-5,5);
		this.y+=random(-5,5);
		//this.y=random(-2,1);
	}
}

class Ball{

	constructor(cwidth,cheight,x1,y1,rad)
	{
		this.x=x1;
		this.y=y1;
		this.radius=rad;
		this.maxRight=cwidth;
		this.maxBottom=cheight;
		this.dx=0;
		this.dy=0;
		this.colR=100;
		this.colG=100;
		this.colB=100;
		this.colWeight=200;

	}
	setColor(r,g,b,alpha)
	{
		this.colR=r;
		this.colG=g;
		this.colB=b;
		this.colWeight=alpha;
	}
	setPosition(x1,y1)
	{
		this.x=x1;
		this.y=y1;
	}

	setSpeed(dx1,dy1)
	{
		this.dx=dx1;
		this.dy=dy1;
	}

	getX()
	{
		return this.x;
	}

	getY()
	{
		return this.y;
	}

	move()
	{
		this.x+=this.dx;
		this.y+=this.dy;
	}

	show()
	{
		noStroke();
		//fill(this.colr,this.colg,this.colb,50);
		fill(this.colR,this.colG,this.colB,this.colWeight);
		ellipse(this.x,this.y,this.radius,this.radius);
	}
	
	shake(x1,y1,freq)
	{
		this.x=random(x1-freq,x1+freq);
		this.y=random(y1-freq,y1+freq);
	}


	attacheWithMouse()
	{
		this.x=mouseX;
		this.y=mouseY;
	}
	attacheWithMouseX()
	{
		this.x=mouseX;
		// this.y=mouseY;
	}
	attacheWithMouseY()
	{
		this.y=mouseY;
		// this.y=mouseY;
	}
 }


class Particle{
	
	constructor()
	{
		this.x=460;
		this.y=460;
		this.radius=random(13,30);
		this.dx=random(-2,2);
		this.dy=random(-8,-4);
		this.weight=200;
	}
	setPosition(x1,y1)
	{
		this.x=x1;
		this.y=y1;
	}
	update()
	{
		this.x+=this.dx+random(-3,3);
		this.y+=this.dy;
		this.weight-=10;
	}
	show()
	{
		noStroke();
		fill(200,random(10,120),0,this.weight);
		ellipse(this.x,this.y,this.radius);
	}
}

class PointerParticle
{
	constructor()
	{
		this.x=random(460,450);
		this.y=random(460,450);
		this.radius=random(30,40);
		this.dx=random(-1,1);
		this.dy=random(-1,2);
		this.weight=150;
	}
	setPosition(x1,y1)
	{
		this.x=x1;
		this.y=y1;
	}
	getX()
	{
		return this.x;
	}
	getY()
	{
		return this.y;
	}
	changeDirX()
	{
		this.dx=-this.dx;
	}
	changeDirY()
	{
		this.dy=-this.dy;
	}
	update()
	{
		this.x+=this.dx;
		this.y+=this.dy;
		this.weight-=5;
	}
	show()
	{
		noStroke();
		// fill(200,0,0,100);
		fill(200,random(10,120),0,this.weight);
		ellipse(this.x,this.y,this.radius);
	}
}

class BigBubble
{
	constructor(cwidth,cheight,rad)
	{
		this.x=random(rad,cwidth-rad);
		this.y=random(rad,cheight-rad);
		this.radius=rad;
		this.dV=random(1,3);
		this.density=random(50,250);
		this.fadeTime=random(1,4);
	}

	fadeOut()
	{
		this.density-=this.fadeTime;
		if(this.density<0)
		{
			this.density=random(200,250);
		}
	}

	grow()
	{
		this.radius+=this.dV;
		if(this.radius>random(70,80))	
			this.radius=random(20,30);
	}

	show()
	{
		noStroke();
		// fill(200,0,0,100);
		fill(0,230,230,this.density);
		ellipse(this.x,this.y,this.radius);
	}
}

