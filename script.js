document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bmi-form");
  const bmiValueElement = document.querySelector(".bmi-value");
  const bmiTextElement = document.querySelector(".bmi-text");
  const informationElement = document.getElementById("info-text");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Pengecekan Gender
    const genderSelect = document.querySelector('input[name="gender"]:checked');

    // Ambil nilai input dari pengguna
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

    // Validasi input
    if (
      isNaN(berat) ||
      isNaN(tinggi) ||
      tinggi <= 0 ||
      berat <= 0 ||
      !genderSelect
    ) {
      alert("Harap isi semua masukan yang ada");
      return;
    }

    // Hitung BMI
    const bmi = (berat / (tinggi * tinggi)).toFixed(1);

    // Tentukan kategori BMI
    let kategori = "";
    let information = "";

    if (bmi < 18.5) {
      kategori = "Kekurangan berat badan";
      information =
        "Anda berada dalam kategori underweight atau kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      kategori = "Normal (ideal)";
      information = "Anda berada dalam kategori normal atau ideal.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      kategori = "Kelebihan berat badan";
      information =
        "Anda berada dalam kategori overweight atau berat badan berlebih.";
    } else {
      kategori = "Kegemukan (Obesitas)";
      information = "Anda berada dalam kategori obesitas.";
    }

    // Tampilkan hasil di halaman
    bmiValueElement.textContent = bmi;
    bmiTextElement.textContent = `Anda memiliki ${kategori.toLowerCase()}.`;
    informationElement.textContent = information;
  });
});
