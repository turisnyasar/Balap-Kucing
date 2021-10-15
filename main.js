btnUlang.disabled = true

var player = 1
var timerLomba
var peserta = []

var suara_lomba = new Audio('lomba.mp3')
suara_lomba.loop = true
var suara_menang = new Audio('menang.mp3')

var daftar_nama = [ "Kuro", "Haiiro", "Oren", "Aoi" ]

shuffleArray(daftar_nama) 

for (i=0; i<daftar_nama.length; i++) {
 document.getElementById(`cat${i+1}_skor`).innerHTML =
 daftar_nama[i]
}

var daftar_kucing = []


for (i=0; i<daftar_nama.length; i++) {
 let item = {}
 item.nama = daftar_nama[i]
 item.pic_diam = daftar_nama[i].toLowerCase() + ".gif"
 item.pic_lari = daftar_nama[i].toLowerCase() + "-run.gif"
 item.pic_kalah = daftar_nama[i].toLowerCase() + "-loose.gif"
 item.speed = Math.floor( (Math.random() * 5) + 6) 
 item.endurance = Math.floor( (Math.random() * 4) + 7) 
 item.id = "cat" + (i+1)
 daftar_kucing.push(item)
}

for (i=0; i<daftar_kucing.length; i++){
 let obj = new kucing(daftar_kucing[i])
 obj.init_element()
 peserta.push(obj)
 
 let kotak = buat_kotak(obj)
 kotak.kucing = obj
 kotak.idkucing = i
 dialog_content.appendChild(kotak)
 
 kotak.onclick = function() {
  player = kotak.idkucing
  document.getElementById(`cat${player+1}_skor`).innerHTML += "(Player)"
  start_lomba()
 }
}


