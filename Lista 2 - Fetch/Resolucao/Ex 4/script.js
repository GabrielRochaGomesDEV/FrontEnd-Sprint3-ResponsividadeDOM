let cards = document.getElementById("cards");

const gerarPokemons = () => {
    // Laço de repetição executado 3 vezes para pegar 3 pokemons
    for (let index = 1; index <= 3; index++) {
        var endpoint = `https://pokeapi.co/api/v2/pokemon/${index}`;
        fetch(endpoint, {
            method: 'GET',
            headers: { 'Content-Type': "application/json" },
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                // Inserindo a imagem do Pokémon e o texto "Pokemon"
                cards.innerHTML += `
                    <div class='card'>
                        <img src="${result.sprites.front_default}" alt="Imagem do ${result.name}" class="pokemon-img">
                        <div class="card-info">
                            <p class="pokemon-name">${result.name}</p>
                            <div class='linha'></div>
                            <div class='card-dados'>
                                <p>${result.weight} kg Peso</p>
                                <p>${result.height} m Altura</p>
                            </div>
                            
                        </div>
                    </div>
                `;
            });
    }
}

gerarPokemons();

