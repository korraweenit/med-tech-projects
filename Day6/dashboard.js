/* ==================================
    1. "เชื่อมต่อ" จอแสดงผล (Elements)
   ================================== */
const patientIdDisplay = document.getElementById("patient-id");
const heartRateDisplay = document.getElementById("heart-rate");
const bloodPressureDisplay = document.getElementById("blood-pressure");
const temperatureDisplay = document.getElementById("temperature");

/* ==================================
    2. "โทรศัพท์" (Fetch API)
    เราจะสั่งให้มัน "โทร" ทันทีที่หน้านี้โหลด
   ================================== */
// พิมพ์ "ที่อยู่" (URL) ของ "หลังบ้าน" (API) ที่เราจะโทรไป
const apiUrl = "http://localhost:3000/vitals";

// 2.1) "โทร" ไปที่ API
fetch(apiUrl)
    
    // 2.2) "รอรับสาย" และ "แปล" สายที่โทรกลับมา
    //      (เขาส่ง "JSON" กลับมา เราต้อง "แกะ" มันก่อน)
    .then( (response) => {
        return response.json(); 
    })
    
    // 2.3) "หลังจากแกะ" ข้อมูล (data) ได้แล้ว...
    .then( (data) => {
        // "ข้อมูล" (data) ที่ได้ ก็คือ JSON ที่เราเห็นใน Day 5 นั่นเอง
        console.log("ได้รับข้อมูลจาก Server:", data);

        // 2.4) "สั่งการ" นำข้อมูลไป "แสดงผล" บนจอ
        patientIdDisplay.textContent = data.patientId;
        heartRateDisplay.textContent = data.heartRate;
        bloodPressureDisplay.textContent = data.bloodPressure;
        temperatureDisplay.textContent = data.temperatureC;
    })
    
    // 2.5) (เผื่อไว้) ถ้า "โทรไม่ติด" (เช่น ลืมเปิด Server)
    .catch( (error) => {
        console.error("เกิดข้อผิดพลาด:", error);
        patientIdDisplay.textContent = "Error";
        patientIdDisplay.style.color = "red";
    });