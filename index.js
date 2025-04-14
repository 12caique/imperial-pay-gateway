const express = require('express');
const app = express();
const port = 3000;

// Definindo uma rota básica
app.get('/', (req, res) => {
  res.send('Gateway de Pagamento funcionando!');
});

// Rodando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
