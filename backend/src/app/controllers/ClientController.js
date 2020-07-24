import * as Yup from 'yup';
import Client from '../models/Client';

class ClientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      cpf: Yup.string().required().min(11),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na Validação' });
    }

    const clientExists = await Client.findOne({
      where: { email: req.body.email },
    });

    if (clientExists) {
      return res.status(400).json({ error: 'Cliente já existe' });
    }

    const { id, email, name, cpf } = await Client.create(req.body);

    return res.json({
      id,
      email,
      name,
      cpf,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na Validação' });
    }

    const { email, oldPassword } = req.body;

    const client = await Client.findByPk(req.clientId);

    if (email !== client.email) {
      const clientExists = await Client.findOne({
        where: { email },
      });

      if (clientExists) {
        return res.status(400).json({ error: 'Cliente já existe' });
      }
    }

    if (oldPassword && !(await client.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Senha não confere' });
    }

    const { id, name, cpf } = await client.update(req.body);

    return res.json({
      id,
      email,
      name,
      cpf,
    });
  }
}

export default new ClientController();
