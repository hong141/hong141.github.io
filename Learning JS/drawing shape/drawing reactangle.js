// var canvas = document.getElementById('canvas')
var canvas = document.querySelector('#canvas')

canvas.width = 1000
canvas.height = 500
canvas.style.border = '2px solid red'

console.log(canvas)

var ctx = canvas.getContext('2d')

console.log(ctx)

// Draw a rectangle
/* ctx.fillStyle = 'red'
ctx.rect(10,10, 200, 100)
ctx.fill() */

ctx.beginPath()
ctx.fillStyle = "red"
ctx.strokeStyle = ""

ctx.fillStyle = 'red'
ctx.fillRect(275, 100, 450, 300)

ctx.fillStyle = 'white'
ctx.fillRect(275, 150, 450, 200)

ctx.fillStyle = 'midnightblue'
ctx.fillRect(275, 200, 450, 100)

// clearRect(x,y,width, height)
ctx.clearRect(10, 10, 100, 100)

ctx.fillStyle = "black";
ctx.fillRect(950, 0, 50, 100)

ctx.fillStyle = "orange";
ctx.fillRect(900, 450, 100, 50)

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 100, 100)

ctx.fillStyle = "red";
ctx.fillRect(0, 400, 40, 80)

// write this in html first
// <canvas id="canvas"></canvas>

/*ctx.fillStyle = "red"
ctx.strokeStyle = "blue"
ctx.arc(300, 300, 150, 0, 1.5 * Math.PI, false)
ctx.stroke()
ctx.fill() */

/* ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.arc(300, 300, 150, 0, 2 * Math.PI, false)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.arc(250, 250, 20, 0, 2 * Math.PI, false)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.arc(350, 250, 20, 0, 2 * Math.PI, false)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.arc(300, 300, 100, 0 * Math.PI , 1 * Math.PI, false)
ctx.stroke()
ctx.closePath() */

ctx.beginPath()
ctx.strokeStyle = "brown"
ctx.rect(125, 100, 450, 300)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "red"
ctx.arc(350, 250, 80, 0, 2 * Math.PI, false)
ctx.fill()
ctx.closePath()

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

class Round {
    constructor(dx, dy, radius, startAngle, endAngle, clockwise, color) {
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.color = color
        this.clockwise = clockwise
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.dx, this.dy, this.radius, this.startAngle, this.endAngle, this.clockwwise, this.color)
        ctx.fill()
    }
}

var round = new Round(300, 300, 150, 0, 2 * Math, PI, false, 'pink')
round.draw()