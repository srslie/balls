const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let t = performance.now()

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //when resize happens, it stretches drawings, but this reset will clear the canvas so add a rerender
})

const mouse = {
  x: 100,
  y: 100
}

canvas.addEventListener('click', event => {
  mouse.x = event.x
  mouse.y = event.y
  drawBall()
})

canvas.addEventListener('mousemove', event => {
  mouse.x = event.x
  mouse.y = event.y
  drawBall()
})

const getRandomColor = () => {
  const getRandomNum = () => Math.round(Math.random() * 255)
  return `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
}
// class Ball {
//   constructor(x, y, r) {
//     this.startX = x;
//     this.startY = y;
//     this.radius = r;
//     this.color = getRandomColor()
//   }

//   move() {
//     // ctx.clearRect(0,  0 ,  window.innerWidth, window.innerHeight)
//     ctx.save()
//     ctx.translate(150, 150)
//     ctx.restore()
//     window.requestAnimationFrame(this.move)
//   }

//   draw() {
//     ctx.beginPath()
//     ctx.arc(this.startX, this.startY, this.radius, 0, (Math.PI * 2))
//     ctx.fillStyle = this.color
//     ctx.fill()
//   }

// }

  // new Ball(100, 100, 50).draw()
  // new Ball(500, 500, 150).draw()


const drawBall = () => {
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    // const tnow = performance.now()
    // const timeDiffernce = tnow - t
    // t = tnow
    // const movement = timeDiffernce + 10
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y , 30, 0, (Math.PI * 2))
    ctx.fillStyle = getRandomColor()
    ctx.fill()
    // ctx.save()
    // ctx.rotate( (2 * Math.PI) * timeDifference * .02)
    // ctx.translate(movement, 0)
    // ctx.restore()
  }

  drawBall();