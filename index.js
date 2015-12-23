var player = 'black'
document.querySelector('.board')
  .addEventListener('mouseover', mouseOver)

function mouseOver (event) {
  event.preventDefault()
  if (event.target.id === '') return
  console.log(document.querySelector('#' + event.target.id).childElementCount)
  if (document.querySelector('#' + event.target.id).childElementCount === 2) return
  insertCell(player, '#' + event.target.id)
  player === 'black' ? player = 'white' : player = 'black'
  console.log('#' + event.target.id)
}

function insertCell (player, cellLoction) {
  const p = document.createElement('img')
  player === 'white' ? p.setAttribute('src', 'WX_circle_white.png')
    : p.setAttribute('src', 'WX_circle_black.png')
  document.querySelector(cellLoction).appendChild(p)
}
