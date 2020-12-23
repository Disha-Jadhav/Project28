class rope
{
    constructor(bodyA, bodyB)
    {
        var options = 
        {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 20
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    attach(body)
    {
        this.Rope.bodyA = body;
    }

    fly()
    {
        this.Rope.bodyA = null;
    }
 
    display()
    {
         if(this.Rope.bodyA)
         {
            var pointA = this.Rope.bodyA.position;
            var pointB = this.Rope.bodyB.position;
            stroke("white")
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
         } 
    }
}