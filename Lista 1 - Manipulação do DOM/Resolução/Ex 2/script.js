let numero1, numero2, numero3;
let mensagem;

numero1 = prompt("Insira o Primeiro número");
numero2 = prompt("Insira o Segundo número");
numero3 = prompt("Insira o Terceiro número");

if(numero1 > numero2 && numero1 > numero3)
{
    mensagem = "Primeiro número é o maior"
}
else if(numero2 > numero1 && numero2 > numero3)
{
    mensagem = "Segundo número é o maior"
}
else
{
    mensagem = "Terceiro número é o maior"
}

alert(mensagem)