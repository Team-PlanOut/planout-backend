const config = require("../knexfile");
const knex = require("knex")(config);

const db = knex(config.development);

module.exports = db;
