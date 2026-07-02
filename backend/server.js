const express = require('express'); 
const cors = require('cors'); 
const db = require('./db'); 

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Connect Backend Success."
    });
});

app.get('/api/rooms', async (req, res) => {
    try {
        const [ rows ] = await db.query('SELECT * FROM hotel_rooms');

        res.json({
            success: true,
            data: rows
        });
    } catch (error) { 
        console.error('DB err:', error);
    }
});

app.get('/api/rooms/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const [ rows ] = await db.query(
            'SELECT room_floor, room_size, room_available FROM hotel_rooms WHERE room_number = ?',
            [id]
        );

        res.json({
            success: true,
            data: rows[0]
        });
    } catch (error) {
        console.error('DB error:', error);
    }
});

app.post('/api/rooms', async (req, res) => {
    try {
        const {room_number, room_floor, room_size} = req.body;

        const [ result ] = await db.query(
            'INSERT INTO hotel_rooms (room_number, room_floor, room_size, room_available) VALUES (?, ?, ?, ?)',
            [room_number, room_floor, room_size, true]
        );

        res.status(201).json({
            success: true,
            message: 'บันทึกห้องใหม่ลงฐานข้อมูลสำเร็จ'
        });
    } catch (error) {
        console.error('DB error:', error);
    }
})

app.put('/api/rooms/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const [ result ] = await db.query(
            'UPDATE hotel_rooms SET room_available = false WHERE room_number = ?',
            [id]
        );

        res.status(200).json({
            success: true,
            message: 'แก้ไขข้อมูลสำเร็จ'
        });
    } catch (error) {
        console.error('DB error:', error);
    }
});

app.delete('/api/rooms/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const [ result ] = await db.query(
            'DELETE FROM hotel_rooms WHERE room_number = ?',
            [id]
        );

        res.status(200).json({
            success: true,
            message: 'ลบข้อมูลหมายเลขห้องนี้ออกจากฐานข้อมูลสำเร็จ'
        });
    } catch (error) {
        console.error('DB error:', error);
    }
})

const PORT = 3000;
app.listen(PORT, () => { // เปิด server ที่ port 3000
    console.log(`Server running on http://localhost:${PORT}`);
});