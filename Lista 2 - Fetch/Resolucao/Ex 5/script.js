function fetchPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const pokemonInfoDiv = document.getElementById("pokemonInfo");
  
    // Verifica se o nome do Pokémon foi inserido
    if (pokemonName === "") {
      pokemonInfoDiv.innerHTML = "Por favor, insira o nome de um Pokémon.";
      return;
    }
  
    // Realiza a requisição para a API
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon não encontrado!');
        }
        return response.json();
      })
      .then(data => {
        // Organiza as informações que serão exibidas
        const pokemonNameFormatted = data.name.charAt(0).toUpperCase() + data.name.slice(1);  // Capitaliza o nome do Pokémon
        const pokemonType = data.types.map(type => type.type.name).join(', ');  // Junta os tipos do Pokémon
        const pokemonHeight = data.height;
        const pokemonWeight = data.weight;
        const pokemonImage = data.sprites.front_default;  // URL da imagem do Pokémon
  
        // Exibe as informações na página
        pokemonInfoDiv.innerHTML = `
          <h3>${pokemonNameFormatted}</h3>
          <img src="${pokemonImage}" alt="${pokemonNameFormatted}" style="width: 150px; height: auto;">
          <p><strong>Tipo(s):</strong> ${pokemonType}</p>
          <p><strong>Altura:</strong> ${pokemonHeight / 10} m</p>
          <p><strong>Peso:</strong> ${pokemonWeight / 10} kg</p>
        `;
      })
      .catch(error => {
        pokemonInfoDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
      });
  }
  