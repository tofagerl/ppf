#! /usr/bin/env node

let amount = process.argv[2];
let currency = '$';
if(amount.includes('kr')){
  currency = 'kr';
}
amount = amount.replace(currency,'');
if(isNaN(amount)){
  let e = new TypeError("Please use numbers only")
}
let thirty = (currency === 'kr' ? 2.8 : 0.3);
let percentage = (currency === 'kr' ? (amount/1000)*34 : (amount/1000)*29);
let fee = thirty + percentage;
let result = amount - fee;
console.log("Fee:\t"+currency+fee.toFixed(2)+"\nNet:\t"+currency+result.toFixed(2));
