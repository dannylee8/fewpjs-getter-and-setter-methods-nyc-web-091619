// Add your Circle class here
const PI = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return PI * (this.radius * 2)
    }

    get area() {
        return PI * (this.radius * this.radius)
    }

    set diameter(arg) {
        this.radius = arg / 2
    }

    set circumference(arg) {
        this.radius = arg / (PI * 2)
    }

    set area(arg) {
        let area = arg / PI
        this.radius = Math.sqrt(area)
    }
}

