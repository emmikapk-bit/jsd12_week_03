import readline from "readline";

function checkBMI(bmi) {
  if (bmi < 18.5) return "น้ำหนักน้อยไปหน่อยนะ";
  if (bmi < 25) return "หุ่นดีมากครับ";
  if (bmi > 25 ) return "เริ่มอ้วนแล้วนะ ลดหน่อยๆ";
  else { return "ใส่น้ำหนักและส่วนสูงเป็นตัวเลข!"
    } 
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("ใส่น้ำหนักของคุณ (kg): ", (weight) => {
  rl.question("ใส่ส่วนสูงของคุณ (cm): ", (height) => {
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    console.log(`\n--- ผลลัพธ์ ---`);
    console.log(`ค่า BMI ของคุณคือ: ${bmi}`);
    console.log(`คำแนะนำ: ${checkBMI(bmi)}`);
    rl.close();
  });
});