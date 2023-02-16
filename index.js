const initPokemons = (numOfPokemons = 150) => {
    let htmlStr = ''
    for (let i = 1; i <= numOfPokemons; i++) {
        const img = `<div>
                <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt=""/>
                <p>${i}</p>
            </div>`
        htmlStr += img
    }
    document.querySelector(
        '#root'
    ).innerHTML = `<div style="margin:0 auto" class="cards-container">${htmlStr}</div>`
}

const handleChange = ({ target }) => {
    const { value } = target
    if (value > 0 && value <= 898) {
        initPokemons(value)
    }
}

;(() => {
    const input = document.querySelector('.exercise-input')
    input.addEventListener('input', (e) => handleChange(e))
})()
