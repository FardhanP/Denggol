let jam_masuk = Number(prompt('Masukan jam masuk',''))
let jam_keluar = Number(prompt('Masukan jam keluar',''))

if(jam_masuk - jam_keluar){
    alert('Anda bekerja selama ' + (jam_masuk - jam_keluar) + ' jam')
}else if(jam_keluar - jam_masuk){
    alert('Anda bekerja selama ' + (jam_keluar - jam_masuk) + ' jam')
}else{
    alert('Anda melebihi batas jam kerja')
}