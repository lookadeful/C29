class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
        //launchForce
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if(this.sling.bodyA) {
            var puntoA = this.sling.bodyA.position;
            var puntoB = this.pointB;
            push();

            strokeWeight(3);
            line(puntoA.x, puntoA.y, puntoB.x, puntoB.y);
            pop();
        }
    }
}