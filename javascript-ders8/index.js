// let iller =["istanbul", "ankara", "izmir", "bursa", "eskişehir"]

// for(let i=0;i<iller.length;i++){
//     console.log(iller[i]);
    
// }


// let sayilar =[10,20,30,40,50]
// let toplam=0;
// for(let a=0;a<sayilar.length;a++){
//     toplam=sayilar[a]+toplam
// }
// console.log(toplam);


let customer1= {
    ad:"rıdvan",
    soyad: "çakar",
    "sehir":"istanbul",
    ürünler:[
        "laptop", "telefon", "tablet"
    ]
}

for(let key in customer1){
    console.log(customer1[key]);
    
}