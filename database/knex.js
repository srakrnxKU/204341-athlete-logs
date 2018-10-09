require("dotenv").config();

const config = require("../knexfile.js")[process.env.NODE_ENV || "production"];
module.exports = require("knex")(config);
