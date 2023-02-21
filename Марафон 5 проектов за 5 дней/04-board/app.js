const board = document.querySelector('#board')
// const colors = ['#00FFFF;', '#B565A7;', '#3e5f8a', '#ffb02e', '#dad871', '#ff496c', '#ffaacc', '#3cb371']
const colors = ['#FF1D58', '#F75990', '#FFF685', '#00DDFF', '#0049B7']
const SQUARES_NUMBER = 700

function setColor (event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 19px ${color}`
}

function removeColor (event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',  setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}
