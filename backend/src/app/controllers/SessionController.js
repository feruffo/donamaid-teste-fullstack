import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import Client from '../models/Client';
import Professional from '../models/Professional';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na Validação' });
    }

    const { email, password } = req.body;

    const professional = await Professional.findOne({ where: { email } });

    if (professional) {
      return res
        .status(401)
        .json({ error: 'Ainda não implementado para o profissional!' });
    }

    const client = await Client.findOne({ where: { email } });

    if (!client) {
      return res.status(401).json({ error: 'Cliente não encontrado!' });
    }

    if (!(await client.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha não confere' });
    }

    const { id, name } = client;

    return res.json({
      client: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
