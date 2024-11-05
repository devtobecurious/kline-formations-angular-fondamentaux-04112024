let coucou = 1
coucou = 'hello'

function displayWookiee(surname) {
    console.info(surname)
    this.surname = surname
    console.info(this)
}
displayWookiee('a')

const wookie = new displayWookiee('chewie')

function updateDroide(points) {
    this.points = points
    console.info(this)
}

const context = updateDroide.bind(wookie)
context(12)