const express = require('express');
const app = express();
const baseDir = `${__dirname}/dist/`;
const port = process.env.PORT || 8080;

app.use(express.static(`${baseDir}`));

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));