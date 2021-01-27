class Ball{
    constructor(x,y,radius){
    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.x=x
    this.y=y
    this.radius=radius;
    this.ball=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
    World.add(world,this.ball);
    }  

        
    
    display(){
    var ballpositions=this.ball.position;
    push();
    translate(ballpositions.x,ballpositions.y);
    fill("Blue")
   // ellipseMode(RADIUS);
   rectMode(CENTER);
    ellipse(0,-10,this.radius,this.radius);
    pop();


    }
    
}