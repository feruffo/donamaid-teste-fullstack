module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'donamaid',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
