
// ARROW FONKSİYONU

//ES5
let welcomeES5 = function(){
    console.log("welcomeES5");
}
welcomeES5();

//ES6
let welcomeES6 = () => {
    console.log("welcomeES6");
};
welcomeES6();

//with parametres

//ES5
let ES5 = function(x,y){
    return x*y;
}
console.log(ES5(5,6));


//ES6
let ES6 = (a,b) => {
    return a*b;
};
console.log(ES6(5,10));



//ES5
let splitES5 = function(text){
    return text.split(' ');
}
console.log(splitES5("modern javascrip kursu başlıyor"));

//ES6
let splitES6 = text =>{
    return text.split(' ');

}
console.log(splitES6("modern javascrip kursu başlıyor devam"));




const  phones = [
    {name: 'iphone 5', price : 1000 },
    {name: 'iphone 6', price : 2000 },
    {name: 'iphone 7', price : 3000 },
    {name: 'iphone 8', price : 4000 },
];

//ES5
let pieceES5 = phones.map(function(phone){
    return phone.price;
})
console.log(pieceES5);

//ES6

let pieceES6 = phones.map (phone => phone.price);
console.log(pieceES6);


const arr = [1,2,3,4,5,66,75,67,57,758,5654];

//ES5
let evenES5 = arr.filter(function(a){
    return a%2==0;
})
console.log(evenES5);

//ES6 
let evenES6 = arr.filter(a => a%2==1);
console.log(evenES6);