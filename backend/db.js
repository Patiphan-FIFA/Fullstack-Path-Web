const mysql = require('mysql2'); // เรียกใช้ Lib ของ mysql

require('dotenv').config(); // เรียกใช้ .env

const pool = mysql.createPool({ // สร้าง connection pool ช่วยในการเชื่อมต่อหลายๆ อัน
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
});

const promisePool = pool.promise(); // ให้รองรับการใช้ async, await

module.exports = promisePool;