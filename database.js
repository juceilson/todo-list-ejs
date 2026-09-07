const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db.sqlite", // :memory: - para salvamento em memória
  logging: false,
});

module.exports = sequelize;