const express = require('express');
const connectDB = require('./database');
const userRoutes = require('./routes/UserRoutes'); 
const modeloRoutes = require('./routes/ModeloRoutes'); 
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use('/', userRoutes);
//acho q e é isso
app.use('/modelo', modeloRoutes);

app.listen(PORT, () => {
  console.log('Servidor funcionando na porta 3000');
});
