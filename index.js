#! /usr/bin/env node

function calculate (amount) {
  let currency = '$';
  if (amount.includes('kr')) {
    currency = 'kr';
  }
  amount = amount.replace(currency, '');
  if (isNaN(amount)) {
    console.log('Please use numbers only');
    process.exit(1);
  }
  let thirty = (currency === 'kr' ? 2.8 : 0.3);
  let percentage = (currency === 'kr' ? (amount / 1000) * 34 : (amount / 1000) * 29);
  let fee = thirty + percentage;
  let result = amount - fee;
  return {currency, fee, result};
}
function usage () {
  console.log("Supply a price in either USD or NOK:\n\n> ppf '$220'\n> ppf '220k'\n\nNote that the using the format 'ppf $220' without quotation marks will not work due to constraints out of this developers control.");
}
let amount = process.argv[2];
if (!amount) {
  usage();
  process.exit(0);
}
let data = calculate(amount);
console.log('Fee:\t' + data.currency + data.fee.toFixed(2) + '\nNet:\t' + data.currency + data.result.toFixed(2));
