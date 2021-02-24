const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getRandomColor = () => {
  const getRandomNum = () => Math.round(Math.random() * 255)
  console.log(`rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`)
  return `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
}

class Ball {
  constructor(x, y, r) {
    this.startX = x;
    this.startY = y;
    this.radius = r;
    this.color = getRandomColor()
  }

  drawBall() {
    ctx.beginPath()
    ctx.arc(this.startX, this.startY, this.radius, 0, (Math.PI * 2))
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

new Ball(100, 100, 50).drawBall()