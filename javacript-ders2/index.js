/* 
öğrenci bilgileri 
  ali can
  doğum tarihi 2000
  notlar 100, 60, 40

  ayşe taş
  doğum tarihi 2002
  notlar 45, 65, 35

    geçer not 50
    

    1- öğrencilerin yaşlarını hesaplama
    2- ders ortalamarını hesapla
    3- dersten geçip geçmediklerini hesapla

*/
    let GecmeNotu= 50;
    let SimdikiYil= new Date().getFullYear();

    let ogr1="Ali Can";
    let ogr1Not1=100;
    let ogr1Not2=60;
    let ogr1Not3=40;
    let ogr1Ortalama=parseInt((ogr1Not1+ogr1Not2+ogr1Not3)/3);
    let ogr1DogumYil=2000;
    let ogr1Yas=SimdikiYil-ogr1DogumYil;
    let ogr1Durum=(ogr1Ortalama>GecmeNotu);
    console.log(ogr1 + " yaşı: " + ogr1Yas );
    console.log(ogr1 + " ortalaması:" + ogr1Ortalama);
    console.log(ogr1 + " dersi geçti mi: " + ogr1Durum);
    

    let ogr2="Ayşe Taş";
    let ogr2Not1=45;
    let ogr2Not2=65;
    let ogr2Not3=35;
    let ogr2Ortalama=parseInt((ogr2Not1+ogr2Not2+ogr2Not3)/3);
    let ogr2DogumYil=2002;
    let ogr2Yas=SimdikiYil-ogr2DogumYil;
    let ogr2Durum=(ogr2Ortalama>GecmeNotu);
    console.log(ogr2 + " yaşı: " + ogr2Yas );
    console.log(ogr2 + " ortalaması:" + ogr2Ortalama);
    console.log(ogr2 + " dersi geçti mi: " + ogr2Durum);
    

    

