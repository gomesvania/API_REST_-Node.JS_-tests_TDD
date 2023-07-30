module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'John Doe', email: 'jhon@email.com' },
    ]
    res.status(200).json(users);
  };

  const create = (req, res) => {
    const { name, mail } = req.body;
    const user = create(name, mail);

    if (user) {
      // Retorna os dados do usuário criado na resposta
      res.status(201).json(user);
    } else {
      // Caso ocorra algum erro na criação do usuário
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  };

  return { findAll, create };
}