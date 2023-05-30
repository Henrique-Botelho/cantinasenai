const express = require('express');

const app = express();

const baseDir = `${__dirname}/dist/`;

app.use(express.static(`${baseDir}`));

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }));

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));