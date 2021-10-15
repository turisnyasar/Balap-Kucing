class kucing {
 nama
 pic_diam
 pic_lari
 pic_kalah
 speed
 endurance
 jarak

 posX_start
 posY_start
 posX
 posY 

 id
 element_div
 element_img
 element_info

 status

 constructor (data) {
  this.jarak = 0
  this.nama = data.nama
  this.pic_diam = data.pic_diam
  this.pic_lari = data.pic_lari
  this.pic_kalah = data.pic_kalah
  this.speed = data.speed
  this.endurance = data.endurance
  this.id = data.id
 }

 ganti_status(stat){
  if (stat == 'diam') this.status = this.pic_diam
  else
  if (stat == 'lari') this.status = this.pic_lari
  else
  if (stat == 'kalah') this.status = this.pic_kalah
  this.update_element()
 }

 bergerak() {  
  this.posX -= this.speed/4
  this.jarak += (this.speed/32)
  if (this.jarak > 100) this.jarak = 100
  this.element_div.style.left = this.posX + "px"
  let stamina = buat_meter(Math.floor(this.endurance))
  this.element_info.innerHTML = 
       `<b>${this.nama}</b><br>`     
       + `${stamina}`
  if (this.endurance > 0)
    this.endurance -= 0.025
  else {
    if (this.speed > 3) this.speed -= 0.1
  }
 }

 init_element() {
  this.element_img = document.getElementById(this.id + "_img")
  this.element_info = document.getElementById(this.id + "_info")
  this.element_div = document.getElementById(this.id)
  
  let bidang = this.element_div.getBoundingClientRect()
  this.posX_start = bidang.x 
  this.posY_start = bidang.y 
  this.posX = this.posX_start
  this.posY = this.posY_start
  
  this.ganti_status('diam')
  this.update_element()
 }

 update_element() {
   this.element_img.src = this.status
   this.element_info.innerHTML = 
   `<b>${this.nama}</b><br>`
   + `<b>${Math.floor(this.jarak)}</b>m`
 }

}