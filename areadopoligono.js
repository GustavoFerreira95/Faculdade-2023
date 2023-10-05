const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a quantidade de lados: ', (lados) => {
    rl.question('Informe o comprimento dos lados: ', (comprimento) => {
        comprimento = parseFloat(comprimento);
        lados = parseFloat(lados);

        if (!isNaN(comprimento) && !isNaN(lados) && comprimento > 0 && lados > 0) {
            const apotema = (lados * Math.pow(comprimento, 2)) / (4 * Math.tan(Math.PI / lados));
            console.log(`A apótema do polígono regular é: ${apotema}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para largura e altura.');
        }
        rl.close();
    });
});
