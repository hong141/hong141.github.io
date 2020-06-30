var canvas = document.querySelector('#canvas')

canvas.width = 1000
canvas.height = 500
canvas.style.border = '2px solid red'

console.log(canvas)

var ctx = canvas.getContext('2d')

console.log(ctx)

class Round {
    constructor(dx, dy, radius, startAngle, endAngle, color) {
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.dx, this.dy, this.radius, this.startAngle, this.endAngle)
        ctx.fill()
    }
}

var round = new Round(300, 300, 150, 0, 2 * Math.PI, 'pink')
round.draw()

var round1 = new Round(20, 20, 20, 0, 2 * Math.PI, 'skyblue')
round1.draw()