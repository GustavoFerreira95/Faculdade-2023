const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a base do triângulo: ', (base) => {
    rl.question('Informe a altura do triângulo: ', (altura) => {

        base = parseFloat(base);
        altura = parseFloat(altura);

        if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
            const triângulo = base * altura / 2;
            console.log(`a área do triângulo é: ${triângulo} `);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para base e altura.');
        }
        rl.close();
    });
});