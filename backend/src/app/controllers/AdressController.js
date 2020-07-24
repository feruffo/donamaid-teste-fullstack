import * as Yup from 'yup';

import Adress from '../models/Adress';
import Client from '../models/Client';

class AdressController {
  async index(req, res) {
    const client_id = req.clientId;

    const client = await Client.findOne({
      where: { id: client_id },
      include: {
        association: 'adresses',
      },
    });

    return res.json(client.adresses);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      street: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      zipcode: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      country: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na Validação' });
    }

    const {
      client_id,
      street,
      number,
      complement,
      zipcode,
      city,
      state,
      country,
    } = req.body;

    const adress = await Adress.create({
      street,
      number,
      complement,
      zipcode,
      city,
      state,
      country,
      client_id,
    });

    return res.json(adress);
  }
}

export default new AdressController();
