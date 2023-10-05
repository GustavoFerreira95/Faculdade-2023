const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o raio da base do cone: ', (raio) => {
    rl.question('Informe a geratriz do cone: ', (geratriz) => {
        raio = parseFloat(raio);
        geratriz = parseFloat(geratriz);

        if (!isNaN(raio) && !isNaN(geratriz) && raio > 0 && geratriz > 0) {
            
            const areaBase = Math.PI * Math.pow(raio, 2) ;
            
            const areaLateral = Math.PI * raio * geratriz ;
            
            const areaTotal = Math.PI * Math.pow(raio, 2) + Math.PI * raio * geratriz ;
            
            console.log(`A área total do cone é: ${areaTotal.toFixed(2)}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para raio e geratriz.');
        }
        rl.close();
    });
});
