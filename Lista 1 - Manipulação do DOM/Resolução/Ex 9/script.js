window.onload = () => {
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const submitButton = document.getElementById('submitButton');
    const mensagemErro = document.getElementById('mensagemErro');

    // Função para verificar se os campos estão preenchidos corretamente.
    const verificarCampos = () => {
        const nome = nomeInput.value.trim();  // Remove espaços extras
        const idade = parseInt(idadeInput.value.trim(), 10); // Usando parseInt para tentar converter em número

        let mensagem = '';  // Mensagem de erro

        // Verifica se o nome está vazio
        if (!nome) {
            mensagem += 'O campo do Nome está vazio. ';
        }

        // Verifica se a idade é válida usando parseInt() diretamente
        if (parseInt(idade) !== idade || idade <= 0) {  // Verifica se o valor não foi convertido corretamente ou é <= 0
            mensagem += 'O campo da Idade está vazio ou não é válido. ';
        }

        // Exibe a mensagem de erro
        mensagemErro.textContent = mensagem;

        // Habilita o botão se os campos estiverem preenchidos corretamente
        submitButton.disabled = !(nome && idade > 0);
    };

    // Adiciona eventos para validar os campos sempre que o usuário digitar algo
    nomeInput.addEventListener('input', verificarCampos);
    idadeInput.addEventListener('input', verificarCampos);

    // Ao clicar no botão, adiciona o usuário à lista
    submitButton.addEventListener('click', () => {
        const nome = nomeInput.value;
        const idade = idadeInput.value;
        document.getElementById('listaUsuarios').innerHTML += `<li>${nome}<br><br>${idade} anos</li>`;
        nomeInput.value = idadeInput.value = '';  // Limpar os campos
        submitButton.disabled = true;  // Desabilitar o botão novamente
        mensagemErro.textContent = '';  // Limpar a mensagem de erro
    });
};
