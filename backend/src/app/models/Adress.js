import Sequelize, { Model } from 'sequelize';

class Adress extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        zipcode: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        country: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
    this.hasMany(models.Order, { foreignKey: 'adress_id', as: 'orders' });
  }
}

export default Adress;
