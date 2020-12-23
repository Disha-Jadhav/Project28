class mango
{
    constructor(x, y, r) 
    {
        var options =
        {
          restitution: 0.4,
          isStatic: true
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options); 
        this.image = loadImage("mango.png");      
        World.add(world, this.body);
    }
    display() 
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }
};