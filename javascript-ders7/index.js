//  OBJECT

let customer1= {
    ad:"rıdvan",
    soyad: "çakar",
    "sehir":"istanbul",
    ürünler:[
        "laptop", "telefon", "tablet"
    ]
}

let customer2= {
    ad:"ali",
    soyad: "taş",
    "sehir":"ankara",

}

let customer3= {
    ad:"veli",
    soyad: "can",
    "sehir":"izmir",
    "eşya":{
        telefon :"iphone",
        fiyat: 100,
    }
}
console.log(customer1.soyad);
console.log(customer2.ad);
console.log(customer3.sehir);
console.log(customer1.ürünler[0]);
console.log(customer1.ürünler);
console.log(customer3.eşya.fiyat);

let musteriler = [
    customer1,
    customer2,
    customer3,
]

console.log(musteriler);
