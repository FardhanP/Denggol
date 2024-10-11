// soal 1
// let x = Number (prompt ("Masukan bilangan nya" , ""));
// let y = Number (prompt ("Masukan bilangan nya" , ""));

// if (x > y) {
//     alert(`Yang terbesar adalah bilangan ${x}`);
// }
// else{
//     alert(`Yang terbesar adalah bilangan ${y}`);
// }

// soal 2
// let a = Number(prompt("masukan a "));
// let b = Number(prompt("masukan b "));
// let c = Number(prompt("masukan c "));

// let d = b ** 2 - (4 * (a * c)) //rumus mencari diskriminasi
// if(d > 0){
//     alert('Real beda =' + ${d})
// }else if(d == 0){
//     alert('Sama =' + ${d})
// }else{
//     alert('Imajiner =' + ${d})
// }

// soal 3

// let UTS = Number(prompt("masukan nilai UTS"));
// let UAS = Number(prompt("masukan nilai UAS"));
// let Tugas = Number(prompt("masukan nilai Tugas"));

// let average = (UTS + UAS + Tugas) / 3;

// if(average >= 80 && average <= 100) {
//     return 'A';
// }else if(average >= 70 && average < 80) {
//     return 'B';
// }else if(average >= 50 && average < 70) {
//     return 'C';
// }else if(average >= 40 && average < 50) {
//     return 'D';
// }else{
//     return 'E';
    
// }

// // soal 4
// let x = Number(prompt('Masukan nilai X'));
// let y = Number(prompt('Masukan nilai Y'));
// let z = Number(prompt('Masukan nilai Z'));

// if(x > y && x > z){
//     alert(`Yang terbesar adalah X` );
// }else if(y > x && y > z){
//     alert(`Yang terbesar adalah Y`);
// }else if(z > x && z > y){
//     alert(`Yang terbesar adalah Z`);
// }else{
//     alert(`Tidak ada yang terbesar`);
// }

//soal no 5
// let x = Number(prompt("masukan angka"));
// let y = Number(prompt("masukan angka"));

// if(x < 0 && y < 0){
//     return 'kuadran III';
// }else if(x > 0 && y > 0){
//     return 'kuadran I';

// }else if (x < 0 && y > 0){
//     return 'kuadran II';
// }else if(x > 0 && y < 0){
//     return 'kuadran IV';
// }else{
//     return 'salah';
// }

// soal 6
// let tanggal = Number(prompt("masukan tanggal"));
// let bulan = Number(prompt("masukan bulan"));
// let hari = 0

// if(bulan == 2) {
//     hari = 31 + tanggal
// } else if(bulan == 3) {
//     hari =31 + 28 + tanggal
// }else if(bulan == 4 ){
//     hari = 31 + 28 + 31 + tanggal

// }else if (bulan == 5 ){
//     hari = 31 + 28 + 31 + 30 + tanggal
// }else if (bulan == 6 ){
//     hari = 31 + 28 + 31 + 30 + 31 + 30 + tanggal
// }else if (bulan == 7 ){
//     hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + tanggal
// }else if (bulan == 8 ){
//     hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 +30 +tanggal
// }else if (bulan == 9 ){
//     hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 +tanggal
// }else if (bulan == 10 ){
//    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + tanggal
// }else if (bulan == 11 ){
//    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 +tanggal
// }else if (bulan == 12 ){
//    hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 +tanggal
// }else {
//     alert('eror')
// }

// alert(hari)