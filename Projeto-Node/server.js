const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre.html'));
});

app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicos.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'contato.html'));
});

// 404
app.use((req, res) => {
    res.status(404).send('<h1>404 - Página não encontrada</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
