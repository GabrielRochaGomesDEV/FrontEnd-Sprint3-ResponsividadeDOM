// Função para contar a quantidade de caracteres e exibir o resultado
function contarCaracteres() {
    // Obtém a mensagem digitada pelo usuário
    let mensagem = document.getElementById("mensagem").value;
    
    // Conta a quantidade de caracteres, incluindo os espaços
    let quantidadeCaracteres = mensagem.length;

    // Exibe o resultado no parágrafo com id "resultado"
    document.getElementById("resultado").innerHTML = "<strong>Quantidade de caracteres: " + quantidadeCaracteres + "</strong>";
}

// Função para contar a quantidade de caracteres e exibir o resultado
function contarCaracteres() {
    // Obtém a mensagem digitada pelo usuário
    let mensagem = document.getElementById("mensagem").value;
    
    // Conta a quantidade de caracteres, incluindo os espaços
    let quantidadeCaracteres = mensagem.length;

    // Exibe o resultado no parágrafo com id "resultado"
    document.getElementById("resultado").innerHTML = "<strong>Quantidade de caracteres: " + quantidadeCaracteres + "</strong>";
}

// Limitar a entrada do textarea para 10 caracteres
const textarea = document.getElementById('mensagem');
textarea.addEventListener('input', function() {
    if (textarea.value.length > 10) {
        textarea.value = textarea.value.substring(0, 10); // Garante que não ultrapasse 10 caracteres
    }
});

// Função para destacar palavras com mais de 10 caracteres
function destaquePalavras() {
    let mensagem = document.getElementById("mensagem").value;
    
    // Divide o texto em palavras usando o espaço como delimitador
    let palavras = mensagem.split(' '); // Agora usamos ' ' para dividir o texto em palavras
    
    // Inicializa o novo texto
    let novoTexto = '';
    
    // Percorre as palavras e monta o texto
    palavras.forEach(function(palavra) {
        if (palavra.length > 10) {
            // Se a palavra tiver mais de 10 caracteres, coloca em destaque
            novoTexto += '<span>' + palavra + '</span> ';
        } else {
            novoTexto += palavra + ' ';
        }
    });

    // Exibe o novo texto com palavras destacadas no parágrafo de resultado
    document.getElementById("resultado").innerHTML = novoTexto.trim(); // O .trim() remove o espaço extra no final
}
