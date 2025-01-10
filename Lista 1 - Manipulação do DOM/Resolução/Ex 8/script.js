window.onload = function() {
    document.getElementById('submitButton').addEventListener('click', function() {
        // Obtem o valor dos campos
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;

        // Cria o conteúdo da lista com uma string
        const lista = document.getElementById('listaUsuarios');
        const conteudo = `<li>${nome}<br><br> ${idade}<br><br></li>`;

        // Adiciona o conteúdo à lista
        lista.innerHTML += conteudo; // Acrescenta uma nova linha no final da lista

        // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
    });
};

