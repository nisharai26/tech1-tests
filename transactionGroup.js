// This is program sorting and counting the duplicate element in array and enlist them along side the item in an array in specific format.output should be ['bin 3','can 1']


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'groupTransactions' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function groupTransactions(transactions) {
    // Write your code here
   transactions.sort();
  const counts = {};

transactions.forEach(function (x) { 

counts[x] = (counts[x] || 0) + 1; 

// console.log(counts);
});
const result = []
for (let key of Object.keys(counts)) {
   result.push(`${key} ${counts[key]}`);
}
return result


}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const transactionsCount = parseInt(readLine().trim(), 10);

    let transactions = [];

    for (let i = 0; i < transactionsCount; i++) {
        const transactionsItem = readLine();
        transactions.push(transactionsItem);
    }

    const result = groupTransactions(transactions);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
