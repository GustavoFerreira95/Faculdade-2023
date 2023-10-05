const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o lado do quadrado: ', (lado) => {
    lado = parseFloat(lado);

    if (!isNaN(lado) && lado > 0) {
        const areaQuadrado = Math.pow(lado, 2);
        console.log(`a área do quadrado é: ${areaQuadrado} `);
    } else {
        console.log('Por favor, insira valores válidos maiores que zero para base e altura.');
    }
    rl.close();
});