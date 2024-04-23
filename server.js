const express = require('express');
const connectDB = require('./database');
const userRoutes = require('./routes/UserRoutes'); // Renomeando para userRoutes para mais clareza
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

// Definindo as rotas de usuário como manipuladores de rota para a raiz
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log('Servidor funcionando na porta 3000');
});
