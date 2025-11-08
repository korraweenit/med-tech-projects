const calculateButton = document.getElementById("calculateButton");
const weightInput = document.getElementById("weight");
const resultDisplay = document.getElementById("resultDisplay");

calculateButton.addEventListener("click", Calfluid);

function Calfluid() {
    const w = weightInput.value;
    const CalF = w * 30;

    // นี่คือ "หูฟัง" ที่เราแทรกเข้าไป
    console.log("ค่าน้ำหนักที่ดึงมา:", w);
    console.log("ผลลัพธ์ที่คำนวณได้:", CalF);

    resultDisplay.textContent = "ปริมาณน้ำที่ต้องการ: " + CalF.toFixed(0) + " mL/วัน";
}

/* ใช้แบบปกติจะอ่านง่ายและ ดู bug ง่ายกว่า */