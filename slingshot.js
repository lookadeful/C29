class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
        //launchForce
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