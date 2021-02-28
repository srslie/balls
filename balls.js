const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let t = performance.now();
let balls = [];
let hue = 0

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //when resize happens, it stretches drawings, but this reset will clear the canvas so add a rerender
})

const mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener('click', event => {
  mouse.x = event.x
  mouse.y = event.y
  for (i = 0; i < 30; i++) {
    balls.push(new Ball())
  }
})

canvas.addEventListener('mousemove', event => {
  mouse.x = event.x
  mouse.y = event.y
  for (i = 0; i < 5; i++) {
    balls.push(new Ball())
  }
})

const getRandomNum = () => Math.round(Math.random() * 255)

const getRandomColor = () => `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
class Ball {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = getRandomNum();
    // this.y = getRandomNum();
    this.radius = 10
    //Math.random() * 3;
    this.color = `hsl(${hue}, 100%, 50%)`
    //getRandomColor();
    this.verticalSpeed = Math.random() * 3 ;
    this.horizontalSpeed = Math.random() * 3 ;
  }

  update() {
    this.x += this.verticalSpeed;
    this.y += this.horizontalSpeed;
    //makes 2D vector
    if (this.radius > 0.2) {
      this.radius -= .1
    }
    
  }

  // move() {
  //   ctx.save()
  //   ctx.translate(150, 150)
  //   ctx.restore()
  //   window.requestAnimationFrame(this.move)
  // }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI * 2))
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

// const init = () => {
//   for (i = 0; i < 10; i++) {
//     balls.push(new Ball())
//   }
// }

const drawBalls = () => {
  balls.forEach(ball => {
    ball.update()
    ball.draw()
  })

}

function particles() {
  for (let i = 0; i < balls.length; i++) {
      balls[i].update()
      balls[i].draw()
      for (let j = 0; j < balls.length; j++) {
        const dx = balls[i].x - balls[j].x
        const dy = balls[i].y - balls[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 50) {
          ctx.beginPath();
          ctx.strokeStyle = balls[i].color
          ctx.lineWidth = .2
          ctx.moveTo(balls[i].x, balls[i].y)
          ctx.lineTo(balls[j].x, balls[j].y)
          ctx.closePath();
        }
    }
    if (balls[i].radius <= 0.3) {
      balls.splice(i, 1)
      i--
  }
  }
}

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawBalls()
    particles()
    requestAnimationFrame(animate)
    hue++
    
  }


  animate()