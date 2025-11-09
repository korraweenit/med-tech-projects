/* ส่วน เชื่อมต่อ */
const patientIdDisplay = document.getElementById("patient-id");
const agedisplay = document.getElementById("age");
const complaintDisplay = document.getElementById("chief-complaint"); 
const form = document.getElementById("myform");

/* ส่วน1 ดึงเคสเก่ามาแสดงผล */
const apiUrl = "http://localhost:3000/get-cases";
function loadallcase() {
    console.log("กำลังดึงเคสเก่าจาก Server...");
    fetch(apiUrl)
         .then( (response) => {
             return response.json();
    })
         .then( (caseDatabase) => {
             console.log("ได้รับเคสจาก Server:", caseDatabase);
             const listcase=document.getElementById("case-list");
             listcase.innerHTML="";
             caseDatabase.forEach( (item) => {
             const listItem = document.createElement("li");
             listItem.textContent = `Patient ID: ${item.patientId}, Age: ${item.age}, Complaint: ${item.chiefComplaint}`;
             listcase.appendChild(listItem);
        })
    });
}
/* ส่วน2 เพิ่มเคสใหม่ */ 
form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    const ID=patientIdDisplay.value;
    const age=agedisplay.value;
    const complaint=complaintDisplay.value;
    
    const newCase={
        patientId: ID,
        age: age,
        chiefComplaint: complaint
    };
    console.log("ส่งเคสใหม่:", ID, age, complaint);

    const geturl = "http://localhost:3000/log-cases";
    fetch(geturl,{
        method: 'POST', // 1. บอกว่า "ฉันจะส่ง (POST)"
        headers: {
            'Content-Type': 'application/json' // 2. "ติดป้าย" ว่าของข้างในเป็น JSON
        },
        body: JSON.stringify(newCase) // 3. "แปลง" Object เป็น "ข้อความ" (String) แล้ว "แนบ" ไปกับ body
    })
         .then( (response) => {
             return response.json();})
         .then (data => {
            console.log("ได้รับการตอบกลับจาก Server:", data);
            loadallcase(); // ดึงเคสทั้งหมดมาแสดงผลใหม่
            form.reset();
        })
        .catch( (error) => {
            console.error("การส่ง POST ล้มเหลว:", error);
        });
}
loadallcase();
