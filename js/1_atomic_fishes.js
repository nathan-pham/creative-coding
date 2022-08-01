export class Fish {
    constructor(pos, radius, color, outerColor) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
        this.outerColor = outerColor;
    }

    get u() {
        return this.pos[0];
    }

    get v() {
        return this.pos[1];
    }

    get origin() {
        return createVector(
            lerp(margin, width - margin, this.u),
            lerp(margin, height - margin, this.v)
        );
    }

    draw() {
        strokeWeight(1);
        stroke(255);
        fill(this.color);
        circle(this.origin.x, this.origin.y, this.radius);
    }
}
