// // // // adalimamacam jenis perulangan di js.secara umumn diaBGI 2  
// // // //counted loop dan uncounted loop  
// // // pwebwsnyadalah 
// // // 1. counted loop merupakan perulangan yang jelas dan sudah banyak perulangannya
// // // 2. uncounted loop merupakan perulangan yang tidak berapa kali harus mengulang
// // function pushUp(){

// // }
// // for(i = 1; i <= 10; i++){
// //     pushUp();
// // }

// // let bosan;

// // while(bosan == false){
// //     pushUp();
// // }

// // macam macam perulangan counted loop
// // perulangan for 
// // perulangan ForEach
// // perulangan repeat 

// // macam macam perulangan uncounted
// // 1. perulangna while
// // 2. perulangan DoWhile

// // for(let i = 1; i <= 10; i++){
// //     document.write(`<p>perulangan berulang sebanyak ${i} kali</p>`)
// // }
// //perulangan while
// //perulangan while merupakan peruu=langan yang termaasuk kedalam uncounted loop. namun perulangan while juga dapat masuk atau menjadi perulangan counted loop, dengan memberikan sebuah counted didalamnya
// //contoh
// var huruf = ""
// var ulang = ("apakah anda mau mengulang?");
// var counter = 0;


// while(ulang){
//     let jawab = confirm("anda mau mengulang? ");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }
// document.write ("perulangan sudah dilakukan sebanyak " + counter + "  kali");

// //perulangan do/while 
// //perulangan do/while sama seperti while. 
// //perbedaan nya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengcek kondisi yang ada di dalam kurung while. 

// do{

// }while(kondisi);

// var ulang = confirm("apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("APAKAH ANDA NAU MENGULANG?");

// }while(ulang){
//     document.write("perulangan sudah terjadi sebanyak  " + counter + " kali")
// }

let sum = "";
while(true){
    let value = prompt("masukan huruf untuk membuat kata ");
    if(!value) break;
    sum += value;
}
alert (`kata yang dibuat adalah : ` + sum);