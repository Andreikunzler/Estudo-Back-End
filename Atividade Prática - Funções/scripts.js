// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

function dobro(numero) {
    console.log(`O dobro do número ${numero}é ${numero*2}`);
  }
  dobro(1);


// 9-Crie uma função chamada calcularMedia(nota1, nota2, nota3,
//     nome), que recebe 4 parâmetros sendo três inteiros e um texto
//     (String). Esta função será chamada ao abrir a página e mostrará um
//     alerta com a média. Exemplo: “João, sua média é 70.” A função
//     também deve mostrar no console.log() as notas recebidas. Exemplo
//     “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

function calcularMedia(nota1, nota2, nota3, nome) {
    alert(`${nome}, sua media é ${nota1 + nota2 + nota3 / 3}`);
    console.log(`Nota 1: ${nota1}, Nota 2:${nota2}, Nota 3:${nota3}`);
  }
  calcularMedia(1, 2, 3, "douglas");