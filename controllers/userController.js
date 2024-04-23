const userRepository = require('../repository/userRepository');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await userRepository.findAll(); // Corrigido para chamar o método correto
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userRepository.create(req.body); 
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userRepository.updateById(req.params.id, req.body); 
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userRepository.deleteById(req.params.id); 
    res.status(200).json({ message: 'Usuário apagado com sucesso' }); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
