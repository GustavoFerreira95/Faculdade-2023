const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a base maior do trapézio: ', (baseMaior) => {
    rl.question('Informe a base menor do trapézio: ', (baseMenor) => {
        rl.question('Informe a altura do trapézio: ', (altura) => {

        baseMaior = parseFloat(baseMaior);
        baseMenor = parseFloat(baseMenor);
        altura = parseFloat(altura);

        if (!isNaN(baseMaior) && !isNaN(baseMenor) && !isNaN(altura) && baseMaior > 0 && baseMenor > 0 && altura > 0) {
            const trapezio = (baseMaior + baseMenor) * altura / 2;
            console.log(`a área do trapézio é: ${trapezio} `);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para a base maior, base menor e altura.');
        }
        rl.close();
        
        });
    });
});