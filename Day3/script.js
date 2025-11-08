/* ==================================================
    ขั้นที่ 1: "เชื่อมต่อ" (Listen)
    เราจะ "เชื่อม" โค้ด JS ของเราเข้ากับ "อวัยวะ" (Elements) ใน HTML 
    โดยการ "เรียกชื่อ ID" ที่เราตั้งไว้
    ==================================================
*/
// 1. เชื่อมกับ "ปุ่มคำนวณ"
const calculateButton = document.getElementById("calculateButton");

// 2. เชื่อมกับ "ช่องกรอกน้ำหนัก"
const weightInput = document.getElementById("weight");

// 3. เชื่อมกับ "ช่องกรอกส่วนสูง"
const heightInput = document.getElementById("height");

// 4. เชื่อมกับ "จอแสดงผลลัพธ์"
const resultDisplay = document.getElementById("resultDisplay");


// 1. สั่ง "ดักฟัง" เหตุการณ์: "ถ้าปุ่ม calculateButton ถูก 'click' (คลิก)"
//    "ให้ไปเรียกใช้ 'กระบวนการคิด' ที่ชื่อว่า handleCalculate"
calculateButton.addEventListener("click", handleCalculate);

// 2. นี่คือ "กระบวนการคิด" (Function) ที่เราสร้างขึ้น
function handleCalculate() {
    
    // 2.1) "ไปดึงค่า" จากช่องกรอกมาเก็บไว้ใน "กระดาษทด" (ตัวแปร)
    const weight = weightInput.value;
    const heightCM = heightInput.value;

    // 2.2) "คิดคำนวณ" (สูตร BMI = kg / (m * m))
    //      เราต้องแปลง cm เป็น m ก่อน (cm / 100)
    const heightM = heightCM / 100;
    const bmi = weight / (heightM * heightM);

    //  สั่งให้ "จอ" (resultDisplay) เปลี่ยน "เนื้อหาข้างใน" (textContent)
    //      toFixed(2) คือการปัดเศษให้เหลือ "ทศนิยม 2 ตำแหน่ง"
    resultDisplay.textContent = "ผลลัพธ์ BMI: " + bmi.toFixed(2);
}