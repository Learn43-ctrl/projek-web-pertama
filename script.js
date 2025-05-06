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
  // Fungsi Tukar  Tema
function tukarTema() {
  document.body.classList.toggle("malam");
}
// Fungsi Kalkulator
function kira(operasi) {
    var nombor1 = parseFloat(document.getElementById("nombor1").value);
    var nombor2 = parseFloat(document.getElementById("nombor2").value);
    var hasil = 0;

    if (isNaN(nombor1) || isNaN(nombor2)) {
      document.getElementById("hasil").textContent = "Sila masukkan dua nombor.";
      return;
    }

    if (operasi === 'tambah') {
      hasil = nombor1 + nombor2;
    } else if (operasi === 'tolak') {
      hasil = nombor1 - nombor2;
    } else if (operasi === 'darab') {
      hasil = nombor1 * nombor2;
    } else if (operasi === 'bahagi') {
      hasil = nombor2 !== 0 ? nombor1 / nombor2 : 'Tak boleh bahagi dengan sifar';
    }

    document.getElementById("hasil").textContent = hasil;
  }
  
