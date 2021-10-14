
let count = 3;

function render() {
let container = document.getElementById('pokemon')
container.innerHTML = `<img class="pokecenter" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}
let previous = document.getElementById('previous')
let next = document.getElementById('next')



previous.onclick = function() {
    if (count>1){
count--
render()
}
}
next.onclick = function() {
    if(count<650){
    count++
    render()
}
}