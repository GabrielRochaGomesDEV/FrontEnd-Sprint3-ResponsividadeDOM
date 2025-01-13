
function buscarCep() {
    // Coleta o nome da rua 
    let rua = document.getElementById("inputRua").value;
    let listaCep = document.getElementById("listaCep");

    // Verifica se a rua foi preenchida
    if (!rua) {
        listaCep.innerHTML = "<p>Por favor, digite o nome de uma rua.</p>";
        return;
    }

    // Endpoint da API ViaCEP (no exemplo, estamos utilizando São Paulo como cidade e estado)
    let endpoint = `https://viacep.com.br/ws/SP/Sao%20Paulo/${rua}/json/`;

    // Fazendo a requisição fetch
    fetch(endpoint)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(result => {
            listaCep.innerHTML = '<p>Lista de CEPs:</p>';

            // Verifica se a API retornou um array de resultados
            if (Array.isArray(result)) {
                result.forEach(item => {
                    listaCep.innerHTML += `<p>CEP: ${item.cep}</p>`;
                });
            } else {
                listaCep.innerHTML += `<p>CEP encontrado: ${result.cep}</p>`;
            }
        })
        .catch(() => {
            listaCep.innerHTML = "<p>Erro ao buscar os dados.</p>";
        });
}
