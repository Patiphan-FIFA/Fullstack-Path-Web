// เรียกใช้ Lib
const express = require('express'); // ไว้ใช้สร้าง server
const cors = require('cors'); // ไว้ใช้เรียกข้าม origin (ของ frontend กับ backend)
const db = require('./db'); // import db เข้ามา

const app = express(); // สร้างตัวแปร server

app.use(cors()); // เปิดใช้งาน cors
app.use(express.json()); // ให้ server อ่านข้อมูลแบบ json ออก

app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: "Connect Backend Success."
    });
});

app.get('/api/db', async (req, res) => {
    try {
        const [ rows ] = await db.query('SELECT * FROM hotel_rooms');
    } catch (error) { 
        console.error('DB err:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Get data from DB, false' 
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => { // เปิด server ที่ port 3000
    console.log(`Server running on http://Localhost:${PORT}`);
});