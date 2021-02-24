const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath()
let startX = 100
let startY = 100
let radius = 50
ctx.arc(startX, startY, radius, 0, (Math.PI * 2))
ctx.fill()

