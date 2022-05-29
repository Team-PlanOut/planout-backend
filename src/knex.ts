import config from "../knexfile";
const knex = require("knex")(config);

module.exports = knex;
