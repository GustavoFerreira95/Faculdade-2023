const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o raio da esfera: ', (raio) => {
        raio = parseFloat(raio);

        if (!isNaN(raio) && raio > 0) {
                       
            const areaTotal =  4 * Math.PI * Math.pow (raio ,2);
            
            console.log(`A área da esfera é: ${areaTotal.toFixed(2)}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para o raio.');
        }
        rl.close();
    });
