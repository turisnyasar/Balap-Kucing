function shuffleArray(array) {
 for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
 }
}



function buat_kotak(data) {
 let kotak = document.createElement("DIV")
 kotak.className = "kotak"
 let title = document.createElement("H1")
 title.innerHTML = data.nama
 kotak.appendChild(title)
 let gambar = document.createElement("IMG")
 gambar.src = data.pic_diam
 kotak.appendChild(gambar)
 gambar.onmouseover = function() { gambar.src = data.pic_lari }
 gambar.onmouseout = function() { gambar.src = data.pic_diam }
   
 meter_speed = buat_meter(data.speed)
 meter_endurance = buat_meter(data.endurance)
 let teks = document.createElement("SECTION")
 teks.className = "teks"
 teks.innerHTML = 
 `Speed ${meter_speed}<br>
  Endurance ${meter_endurance}`
 kotak.appendChild(teks)
 return kotak
}

function buat_meter(angka) {
 meter = "";
 for(j=1; j<=10; j++) {
  c=j<angka? "&#x2593" : "&#x2592"
  meter += c
 }
 return meter
}


function start_lomba() {
 select_screen.style.display = 'none'
}


function mulai() {
    btnMulai.disabled = true 
    suara_lomba.play()

    for(i=0; i<peserta.length; i++) {
        peserta[i].ganti_status('lari')
    }
    
    info.innerHTML = ""
    timerLomba = setInterval( proses_lomba, 20 )
}

function proses_lomba() {

    for(i=0; i<peserta.length; i++) {
        peserta[i].bergerak()
        if (peserta[i].jarak >= 100) {
            stop_lomba()
            break
        }
    }
}

function stop_lomba() {
    clearInterval(timerLomba)
    suara_lomba.pause()
    suara_menang.play()

    for (i=0; i<peserta.length; i++) {
        if (peserta[i].jarak < 100) {
            peserta[i].ganti_status('kalah')
        }
        else {
            peserta[i].ganti_status('diam')
        }
    }
    btnUlang.disabled = false
    if (peserta[player].jarak >= 100)
        info.innerHTML = "Anda Menang!"
    else
        info.innerHTML = "Anda Kalah!"
}

function ulangi() {
    window.location.reload()
}

