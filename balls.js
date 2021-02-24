const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getRandomColor = () => {
  const getRandomNum = () => Math.round(Math.random() * 255)
  console.log(`rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`)
  return `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
}

ctx.beginPath()
let startX = 100
let startY = 100
let radius = 50
ctx.arc(startX, startY, radius, 0, (Math.PI * 2))
ctx.fillStyle = getRandomColor()
ctx.fill()




