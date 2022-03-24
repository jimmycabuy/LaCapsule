var shopping = [
{ product: "Livre", unitPrice: 10 },
{ product: "CD", unitPrice: 15 },
{ product: "DVD", unitPrice: 23 }
]

var shopping2 =  [
{ product: "Livre", unitPrice: 30 },
{ product: "CD", unitPrice: 20 },
{ product: "DVD", unitPrice: 25 }
]

var panier = 0;
for(i = 0 ; i < shopping.length ; i++){
    panier = panier + shopping[i].unitPrice;
}
console.log(panier);

if(panier > 60){
    console.log("Frais de port offert");
}


var panier2 = 0;
for(j=0 ; j < shopping2.length ; j++){
    panier2 = panier2 + shopping2[j].unitPrice;
}
console.log(panier2);

if(panier2 > 60){
    console.log("Frais de port offert");
}

-----------------------

var shopping = [
{ product: "Livre", unitPrice: 10, quantity: 1 },
{ product: "CD", unitPrice: 15, quantity: 1 },
{ product: "DVD", unitPrice: 23, quantity: 3 }
]

var shopping2 =  [
{ product: "Livre", unitPrice: 10, quantity: 1 },
{ product: "CD", unitPrice: 5, quantity: 2 },
{ product: "DVD", unitPrice: 25, quantity: 1 }
]

var panier3 = 0;
for(y = 0 ; y < shopping.length ; y++){
    panier3 = panier3 + shopping[y].unitPrice * shopping[y].quantity;
}
console.log(panier3);