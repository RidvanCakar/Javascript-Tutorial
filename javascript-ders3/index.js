/*
const ad="ridvancakar";
const sifre=12345;

if(ad=="ridvancakar"){
    if(sifre==12345){
        console.log("giriş yapıldı")
    }else{
        console.log("şifre yanlş");
    }

}else{
    console.log("kullanıcı bulunamadı")
}   */ 

    const ad="Rıdvan";
    const soyad="Çakar";
    const yas=23;
    const sehir= "İstanbul";
    const meslek= "Software Developer";

    const bio= "benim adım " + ad + " soyadım " + soyad + " yaşım " + yas + " " + sehir + "'da yaşıyorum. " +
    "mesleğim " + meslek  ;

    console.log(bio);

  
    
    //backtick
    const newBio= `benim adım ${ad} soyadım ${soyad} yaşım ${yas} ${sehir} 'da yaşıyorum. mesleğim ${meslek}`;

    console.log(newBio);       


   
