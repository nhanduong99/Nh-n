const mysql = require('mysql');
const util = require('util');
const config = require('../config/default.json');

const pool = mysql.createPool(config.mysql);
const mysql_query = util.promisify(pool.query).bind(pool);

module.exports = {
    load: sql => mysql_query(sql),
};