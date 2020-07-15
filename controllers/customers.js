const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getCustomers = (req, res) => {
  pool.query("select * from customers", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createCustomers = (req, res) => {
  let sql =
    "insert into customers (email_address, first_name, last_name, phone) values (?, ?, ?, ?)";
  sql = mysql.format(sql, [
    req.body.email_address,
    req.body.first_name,
    req.body.last_name,
    req.body.phone,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = {
  getCustomers,
  createCustomers,
};
