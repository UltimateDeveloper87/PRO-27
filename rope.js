class Rope{
    constructor(bodyA, bodyB,xOffset){
        var ropeOptions={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04
        }
        this.xOffset=xOffset;
        this.rope=Constraint.create(ropeOptions);
        World.add(world,this.rope)

    }

    display()
    {
        
        var pointA =    this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        stroke("white")
        line (pointA.x+this.xOffset, pointA.y, pointB.x,pointB.y-25); 
        pop();
    }
}