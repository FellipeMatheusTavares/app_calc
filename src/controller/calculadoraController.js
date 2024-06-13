const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        res.redirect('/?error=Valores+inválidos');
        return;
    }

    const resultado = calculadora.calcular(parseFloat(num1), parseFloat(num2), operacao);

    res.send(`
        <html>
        <head>
            <title>Resultado</title>
        </head>
        <body>
            <h1>Resultado da Operação: ${resultado}</h1>
            <a href="/">Voltar</a>
        </body>
        </html>
    `);
};
