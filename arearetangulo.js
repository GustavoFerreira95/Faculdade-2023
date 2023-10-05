const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a largura do retângulo: ', (largura) => {
    rl.question('Informe a altura do retângulo: ', (altura) => {
        largura = parseFloat(largura);
        altura = parseFloat(altura);

        if (!isNaN(largura) && !isNaN(altura) && largura > 0 && altura > 0) {
            const retangulo = largura * altura;
            console.log(`a área do Retangulo é: ${retangulo} `);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para largura e altura.');
        }
        rl.close();
    });
});