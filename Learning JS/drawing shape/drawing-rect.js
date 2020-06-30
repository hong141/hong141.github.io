class Rect {
    constructor(dx, dy, width, height, color) {
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
    }
}

var rect = new Rect(0, 0, 200, 100, 'red')
rect.draw()