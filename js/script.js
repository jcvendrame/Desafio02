window.addEventListener('load', iniciar);

function iniciar() {
    document.getElementById('btn01').addEventListener('click', function() {
        var nome = prompt('Digite seu nome', 'Seu nome aqui....');
        var idade = prompt('Olá ' + nome + ',  qual é sua idade?');
        alert(`Seu nome é ${nome} e você tem ${idade} anos`);
    })
    
}