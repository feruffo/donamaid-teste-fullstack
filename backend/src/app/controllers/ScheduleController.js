import Order from '../models/Order';

class ScheduleController {
  async index(req, res) {
    const client_id = req.clientId;

    const schedules = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    const ordersClient = await Order.findAll({
      where: { client_id },
      attributes: ['schedule', 'duration'],
    });

    const scheduleVerify = schedules.map((schedule) => {
      const isAvailable = ordersClient.every(
        (order) =>
          schedule < order.schedule ||
          schedule >= order.schedule + order.duration
      );
      return {
        hour: schedule,
        isAvailable,
      };
    });

    return res.json(scheduleVerify);
  }
}

export default new ScheduleController();
