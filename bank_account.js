let saldo = 0;

function tambahSaldo(){
  let saldoTambah = window.prompt("Masukan Jumlah Saldo yang ingin ditambahkan: ") 
  if (isNaN(saldoTambah)) {
    window.alert("Inputan harus berupa angka")   
    return 
  }
  saldoTambah = parseFloat(saldoTambah);  
  saldo += saldoTambah;
  window.alert("Jumlah Saldo Anda Sekarang adalah " + saldo)
  document.getElementById("total").innerHTML = saldo
}

function kurangiSaldo(){
  let saldoKurang = window.prompt("Masukan Jumlah Saldo yang ingin diambil: ")  
  if (isNaN(saldoKurang)) {
    window.alert("Inputan harus berupa angka") 
    return
  }
  saldoKurang = parseFloat(saldoKurang);  
  saldo -= saldoKurang;
  window.alert("Jumlah Saldo Anda Sekarang adalah " + saldo)
  document.getElementById("total").innerHTML = saldo
}
