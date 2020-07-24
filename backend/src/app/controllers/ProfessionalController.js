import * as Yup from 'yup';
import Professional from '../models/Professional';
import Order from '../models/Order';

class ProfessionalController {
  async index(req, res) {
    const professional = await Professional.findAll({
      attributes: ['id', 'name', 'email', 'cpf'],
      include: [
        {
          model: Order,
          attributes: ['id', 'schedule', 'duration'],
          as: 'orders',
        },
      ],
    });

    return res.json(professional);
  }

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

    const professionalExists = await Professional.findOne({
      where: { email: req.body.email },
    });

    if (professionalExists) {
      return res.status(400).json({ error: 'Profissional já existe' });
    }

    const { id, name, cpf } = await Professional.create(req.body);

    return res.json({
      id,
      name,
      cpf,
    });
  }
}

export default new ProfessionalController();
