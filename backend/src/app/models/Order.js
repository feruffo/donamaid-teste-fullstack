import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        schedule: Sequelize.INTEGER,
        duration: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
    this.belongsTo(models.Professional, { foreignKey: 'professional_id' });
    this.belongsTo(models.Adress, { foreignKey: 'adress_id' });
  }
}

export default Order;
