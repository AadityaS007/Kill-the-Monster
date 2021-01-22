class Fly {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
        this.pointB = pointB
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push();
        stroke("yellow")
        strokeWeight(3)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();

    }
}