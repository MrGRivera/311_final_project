const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");



const createCustomers = (req, res) => {
  let sql =
    "insert into customers (email_address, first_name, last_name, phone) values (?, ?, ?, ?)";
  sql = mysql.format(sql, [
    req.body.emailAddress,
    req.body.firstName,
    req.body.lastName,
    req.body.phone,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const getCustomers = (req, res) => {
  pool.query("select * from customers", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getCustomers,
  createCustomers,
};
