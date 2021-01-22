class Monster {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.8,
           // frictionAir: 0.005,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius / 4, options)
        this.image = loadImage("images/Monster-02.png")
        World.add(world, this.body)
        this.radius = radius/4

    }

    display() {
        push();
        imageMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        image(this.image, 0, 0, this.radius, this.radius)
       // ellipse( 0, 0, this.radius, this.radius)
        pop();
    }
}

