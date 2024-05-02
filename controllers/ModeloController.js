const userRepository = require('../repository/userRepository');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const ModeloRepository = require('../repository/ModeloRepository.js');
/* 
exports.getAllModelos = async (req, res) => {
  try {
    const token = req.body.token;
    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado/fornecido' });
    }


    jwt.verify(token, config.secretKey, async (err) => {
      if (err) {
        return res.status(401).json({ message: 'Token invalido' });
      } else { 

        const users = await userRepository.findAll();
        res.status(200).json(users);
      }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; */

exports.getAllModelos = async (req, res) => {
  try {
    // Remova a verificação do token JWT
    const modelos = await ModeloRepository.findAll();
    res.status(200).json(modelos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createModelo = async (req, res) => {
  try {
    const newModelo = await ModeloRepository.create(req.body); 
    res.status(201).json(newModelo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateModelo = async (req, res) => {
  try {
    const updatedModelo = await ModeloRepository.updateById(req.params.id, req.body); 
    res.status(200).json(updatedModelo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteModelo = async (req, res) => {
  try {
    await ModeloRepository.deleteById(req.params.id); 
    res.status(200).json({ message: 'modelo apagado com sucesso' }); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getModelo = async (req, res) => {
  try {
    const modelo = await ModeloRepository.findById(req.params.id);
    res.status(200).json(modelo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};