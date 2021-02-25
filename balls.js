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
  for (i = 0; i < 10; i++) {
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
    this.radius = Math.random() * 3;
    this.color = `hsl(${hue}, 100%, 50%)`
    //getRandomColor();
    this.verticalSpeed = Math.random() * 3 - 1.5;
    this.horizontalSpeed = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.verticalSpeed;
    this.y += this.horizontalSpeed;
    //makes 2D vector
    if (this.radius > 100 && this.radius > 10) {
      this.radius -= .5
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

// init()
console.log(balls)

  const animate = () => {
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawBalls()
    requestAnimationFrame(animate)
    hue++
  }

  animate()