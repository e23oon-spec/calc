document.getElementById("bmiForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  const bmi = (weight / (height * height)).toFixed(1);
  let status = "";

  if (bmi < 18.5) status = "저체중";
  else if (bmi < 23) status = "정상";
  else if (bmi < 25) status = "과체중";
  else status = "비만";

  document.getElementById("result").innerHTML = `
    <h2>BMI: ${bmi}</h2>
    <p>체중 상태: <strong>${status}</strong></p>
  `;
});
