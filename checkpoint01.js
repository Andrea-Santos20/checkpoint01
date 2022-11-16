/*
1 ͦ  Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

let readlineSync = require('readline-sync');
const menu = parseInt(readlineSync.question(`Menu: escolha a opcao desejada.
1 - Pipoca:  10 segundos (padrao);
2 - Macarrao:  8 segundos (padrao);
3 - Carne:  15 segundos (padrao);
4 - Feijao:  12 segundos (padrao);
5 - Brigadeiro:  8 segundos (padrao);
 
`))

const time = parseInt(readlineSync.question(`Digite o tempo `))

switch (menu) {
    case 1:
        if (time > 2 * 10) { 
            console.log('A comida queimou.')
        } else if (time < 10) {
            console.log('Tempo insuficiente.')
        } else if (time > 3 * 10) {
            console.log('Kabumm!')
        } else {
            console.log('Prato pronto, bom apetite!')
        }
        break;
    case 2:
        if (time > 2 * 8) { 
            console.log('A comida queimou.')
        } else if (time < 8) {
            console.log('Tempo insuficiente.')
        } else if (time > 3 * 8) {
            console.log('Kabumm!')
        } else {
            console.log('Prato pronto, bom apetite!')
        }
        break;
    case 3:
        if (time > 2 * 15) { 
            console.log('A comida queimou.')
        } else if (time < 15) {
            console.log('Tempo insuficiente.')
        } else if (time > 3 * 15) {
            console.log('Kabumm!')
        } else {
            console.log('Prato pronto, bom apetite!')
        }
        break;
    case 4:
        if (time > 2 * 12) { 
            console.log('A comida queimou.')
        } else if (time < 12) {
            console.log('Tempo insuficiente.')
        } else if (time > 3 * 12) {
            console.log('Kabumm!')
        } else {
            console.log('Prato pronto, bom apetite!')
        }
        break;
    case 5:
        if (time > 2 * 8) { 
            console.log('A comida queimou.')
        } else if (time < 8) {
            console.log('Tempo insuficiente.')
        } else if (time > 3 * 8) {
            console.log('Kabumm!')
        } else {
            console.log('Prato pronto, bom apetite!')
        }
        break;
    default: console.log('Erro, prato inexistente.')
    
}

