function calculateBMI() {
    // Get input values
    let weight = parseFloat(document.getElementById('weight').value);
    let heightCm = parseFloat(document.getElementById('height').value);
    let resultDiv = document.getElementById('result');
    // Validate inputs — FIXED: use && not ||
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        resultDiv.innerHTML = "<span style='color:red'>⚠️ Please enter valid positive numbers!</span>";
        return;
    }
    // Convert height from cm to meters
    let heightM = heightCm / 100;
    // Calculate BMI
    let bmi = weight / (heightM * heightM);
    let bmiRounded = bmi.toFixed(2);
    // Determine BMI category
    let category, color;
    if (bmi < 18.5) {
        category = "Underweight";
        color = "#3498db";
    } else if (bmi < 25) {
        category = "Normal weight ✅";
        color = "#27ae60";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "#f39c12";
    } else {
        category = "Obese";
        color = "#e74c3c";
    }
    // Display the result — FIXED: added backticks `` ` ``
    resultDiv.innerHTML = `
        <strong>Your BMI:</strong> ${bmiRounded}<br>
        <strong>Category:</strong> <span style="color:${color}">${category}</span>
    `;
}