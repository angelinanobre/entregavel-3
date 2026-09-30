const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Servidor de operações matemáticas funcionando!');
});

app.post('/soma', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores devem ser números.' });
    }

    res.json({ resultado: a + b });
});

app.post('/subtracao', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores devem ser números.' });
    }

    res.json({ resultado: a - b });
});

app.post('/multiplicacao', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores devem ser números.' });
    }

    res.json({ resultado: a * b });
});

app.post('/divisao', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores devem ser números.' });
    }

    if (b === 0) {
        return res.status(400).json({ erro: 'Não é possível dividir por zero.' });
    }

    res.json({ resultado: a / b });
});

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});