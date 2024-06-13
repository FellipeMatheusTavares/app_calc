const express = require('express');
const path = require('path');
const app = express();
//const port = 3000;
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/views')));

app.use('/', calculadoraRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});
