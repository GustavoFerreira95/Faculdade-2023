const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a largura da base do prisma: ', (largBase) => {
    rl.question('Informe o comprimento da base do prisma: ', (compBase) => {
        rl.question('Informe a altura do prisma: ', (altura) => {
            
            largBase = parseFloat(largBase);
            compBase = parseFloat(compBase);
            altura = parseFloat(altura);

            if (!isNaN(largBase) && !isNaN(compBase) && !isNaN(altura) && largBase > 0 && compBase > 0 && altura > 0) {
            
            const areaBase = compBase * largBase ;
            const perimBase = 2 * (compBase + largBase);
            const areaLateral = perimBase * altura;
            const areaTotal = 2 * (areaBase) + perimBase * altura;
            
            console.log(`A área total do prisma é: ${areaTotal.toFixed(2)}`);
        } else {
            console.log('Por favor, insira valores válidos maiores que zero para largura da base, comprimento da base e altura.');
        }
        rl.close();
        
        });
    });
});
