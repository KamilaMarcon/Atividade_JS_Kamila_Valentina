//testando loop com while

function testando() {
var a= prompt("quantas vezes você deseja repetir o laço:");
var x=1;
while(x<=a){
    document.write('<br>repetindo:' +x);
    x=x+1
}
}

//testando loop com for
function but() {
    var controle = prompt('escreva um número');
    document.write('<br><h3>testando loop com for</h3>');
    for (a = 1; a <= controle; a++) {
        document.write('<br>o valor de x é:' + a);

    }
    }

function test() {
    var valor = prompt("Digite a opção de 1 a 7");
    // console.log(valor);
    //  console.log (typeof(valor));
    // console.log(Number(valor));
    // console.log (typeof(Number(valor)));

    switch (Number(valor)) {

        case 1:
            alert("você escolheu suco Natural de Limão");
            break;

        case 2:
            alert("você escolheu Suco Natural de Maracujá");
            break;

        case 3:
            alert("você escolheu  Suco Natural de Laranja");
            break;

        case 4:
            alert("você  escolheu Suco Natural Morango");
            break;

        case 5:
            alert("você  escolheu Água gelada");
            break;

        case 6:
            alert("você  escolheu Sorvete");

            break;
        case 7:
            alert("você  escolheu Chamar o Garçom");
            break;

        default:
            alert("Digite de 1 a 7");
            break;
    }
}