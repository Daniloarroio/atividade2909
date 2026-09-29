const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = __dirname;

app.disable('x-powered-by');
app.use(express.static(publicDirectory, { extensions: ['html'] }));

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.get('/{*path}', (_request, response) => {
  response.sendFile(path.join(publicDirectory, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Estuda+ disponível na porta ${port}`);
});
