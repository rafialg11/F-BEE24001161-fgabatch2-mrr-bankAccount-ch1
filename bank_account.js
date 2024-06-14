let saldo = 0;

function tambahSaldo(){
  saldoTambah = window.prompt("Masukan Jumlah Saldo yang ingin ditambahkan: ")
  if (isNaN(saldoTambah)) {
    alert("Masukan bukan angka!");
    return;
  }
  saldoTambah = parseFloat(saldoTambah);
  saldo += saldoTambah;
  window.alert("Jumlah Saldo Anda Sekarang adalah " + saldo)
  document.getElementById("total").innerHTML = saldo
}

function kurangiSaldo(){
  saldoKurang = window.prompt("Masukan Jumlah Saldo yang ingin diambil: ")
  if (isNaN(saldoKurang)) {
    alert("Masukan bukan angka!");
    return;
  }
  saldoKurang = parseFloat(saldoKurang);
  saldo -= saldoKurang;
  window.alert("Jumlah Saldo Anda Sekarang adalah " + saldo)
  document.getElementById("total").innerHTML = saldo
}
