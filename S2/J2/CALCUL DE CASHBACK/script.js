function cashback(data){
    let total = 0;
 
    // Insert your code here
    for(var i = 0 ; i < data.length; i++){
        total += data[i].total * data[i].cashback/100
    }
    
    return total.toFixed(2);
}

const ordersList = [
   {partner: 'Carrefour', total: 57.45, cashback: 5},
   {partner: 'Amazon', total: 60.20, cashback: 3},
   {partner: 'Boulanger', total: 149, cashback: 6},
   {partner: 'Fnac', total: 84.15, cashback: 4},
];
console.log(cashback(ordersList)); 
// Expected: 16.98