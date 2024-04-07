const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://wanderson:93230167@cluster0.zapb3j7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado ao banco de dados');
  } catch(error) {
    console.error('conexão com o mongo db ruim', error.message);
    process.exit(1);
  }
}
module.exports = connectDB;