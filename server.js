const express = require('express');
const connectDB = require('./database');
const routes = require('./routes/UserRoutes');
const app = express();
const PORT = 3000;


connectDB();
app.use(express.json());

app.get('/api', routes);

app.listen(PORT, () => {
  console.log('Funcionou essa merda na porta 3000')
});