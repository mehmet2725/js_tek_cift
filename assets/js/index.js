let sayilar = []
let sayiAdet = Number(prompt(`Kaç adet sayı girmek istediğinizi yazınız`));
let girdi;
let cift = []
let tek = []

for(let i = 0; i < sayiAdet; i++){
    girdi = Number(prompt(`${i + 1}. Sayıyı Giriniz.`));
    sayilar.push(girdi);

    if(girdi % 2 == 0){
        cift.push(girdi);
    }
    else{
        tek.push(girdi);
    }

}

let ciftToplam = 0;
let tekToplam = 0;

for(let i = 0; i < cift.length; i++){
    ciftToplam += cift[i];
}

for(let i = 0; i < tek.length; i++){
    tekToplam += tek[i];
}

console.log(`Girdiğiniz çift sayılar ${cift}`);
console.log(`Girdiğiniz tek sayılar ${tek}`);

console.log(`Çift sayıların toplamı: ${ciftToplam}`);
console.log(`Tek sayıların toplamı: ${tekToplam}`);



// if(girdi % 2 == 0){
//     for(){

//     }
// }

// else{
//     for(){

//     }
// }