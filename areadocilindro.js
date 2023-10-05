const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o raio da base do cilindro: ', (raio) => {
    rl.question('Informe a altura do cilindro: ', (altura) => {
        raio = parseFloat(raio);
        altura = parseFloat(altura);

        if (!isNaN(raio) && !isNaN(altura) && raio > 0 && altura > 0) {
            
            const areaBase = Math.PI * Math.pow(raio, 2) ;
            
            const areaLateral = 2 * Math.PI * raio * altura ;
            
            const areaTotal = areaBase + areaLateral ;
            
            console.log(`A apótema do polígono regular é: ${areaTotal.toFixed(2)}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para largura e altura.');
        }
        rl.close();
    });
});
