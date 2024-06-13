const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.post('/calcular', calculadoraController.calcular);
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'src/views' });
});

module.exports = router;
