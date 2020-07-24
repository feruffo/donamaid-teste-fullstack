import * as Yup from 'yup';

import Order from '../models/Order';
import Professional from '../models/Professional';
import Client from '../models/Client';
import Adress from '../models/Adress';

class OrderController {
  async index(req, res) {
    const client_id = req.clientId;

    const orders = await Order.findAll({
      where: { client_id },
      include: [
        {
          model: Professional,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Adress,
        },
      ],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      schedule: Yup.number().required(),
      duration: Yup.number().required(),
      professional_id: Yup.string().required(),
      adress_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na Validação' });
    }
    const client_id = req.clientId;
    const { schedule, duration, professional_id, adress_id } = req.body;

    const professional = await Professional.findByPk(professional_id);
    const adress = await Adress.findByPk(adress_id);

    if (!professional) {
      return res.status(400).json({ error: 'Profissional não encontrado' });
    }
    if (!adress) {
      return res.status(400).json({ error: 'Endereço não encontrado' });
    }

    const checkAvailability = await Order.findOne({
      where: {
        professional_id,
        client_id,
        adress_id,
        schedule,
      },
    });

    if (checkAvailability) {
      return res
        .status(400)
        .json({ error: 'Pedido de limpeza não está disponível' });
    }

    const order = await Order.create({
      schedule,
      duration,
      client_id,
      professional_id,
      adress_id,
    });

    return res.json(order);
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Client,
        },
        {
          model: Professional,
        },
        {
          model: Adress,
        },
      ],
    });

    if (order.client_id !== req.clientId) {
      return res.status(401).json({
        error: 'Você não tem permissão para cancelar esse pedido',
      });
    }

    await order.destroy({
      where: { id: order.id },
    });

    return res.json(order);
  }
}

export default new OrderController();
