const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //
let caseDatabase = []; 
const port = 3000;

app.use(express.json());/*ตอนทำลืมใส่บรรทัดนี้*/

app.post('/log-cases', (req, res) => {
    const newCase = req.body; // "หยิบ" เคสใหม่ที่หน้าบ้านส่งมา
    console.log("ได้รับเคสใหม่:", newCase);
    caseDatabase.push(newCase); // "ยัด" เคสใหม่ลงตู้เก็บเอกสาร

    res.json({ status: "success", totalCases: caseDatabase.length });

});
app.get('/get-cases', (req, res) => {
    // "ตอบกลับ" ด้วย "ตู้เก็บเอกสาร" ทั้งตู้เลย
    res.json(caseDatabase); 
});
app.listen(port, () => {
    console.log(`🩺 Day 7 Server "เปิดร้าน" แล้ว ที่ http://localhost:${port}`);
    console.log("...กำลังรอรับเคสใหม่ที่ /log-case");
    console.log("...และรอคนมาขอเคสที่ /get-cases");
});