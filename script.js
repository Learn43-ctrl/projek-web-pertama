console.log("JavaScript Aktif");

// Fungsi papar nama
function paparNama() {
  let nama = document.getElementById("nama").value;
  document.getElementById("outputNama").innerText = "Hai, " + nama + "!";
}

// Fungsi tambah nombor
function jumlahkan() {
  let a = parseFloat(document.getElementById("nombor1").value);
  let b = parseFloat(document.getElementById("nombor2").value);
  let jumlah = a + b;
  document.getElementById("hasilJumlah").innerText = "Jumlah: " + jumlah;
}

// Fungsi semak borang
function semakBorang() {
  let emel = document.getElementById("email").value;
  if (emel === "") {
    document.getElementById("mesejBorang").innerText = "Sila masukkan emel!";
    return false;
  }
  document.getElementById("mesejBorang").innerText = "Terima kasih!";
  return false; // Elak reload laman
}
  // Tukar  Tema
function tukarTema() {
  document.body.classList.toggle("malam");
}