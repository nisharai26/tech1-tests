// https://jsonmock.hackerrank.com/api/food_outlets?city=Denver&page=1
// like the example link,I posted above have 4 pages and each page have 10 items so,the output will return the restaurant names where the food_item will be available below the maxCost..in this case it is 50

'use strict';

const fs = require('fs');
const https = require('https');

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

const axios = require("axios");
/*
 * Complete the 'getRelevantFoodOutlets' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/food_outlets?city=<city>&page=<pageNumber>
 *
 * The function is expected to return an array of strings.
 * 
 * The function accepts a city argument (String) and maxCost argument(Integer).
 */
var http = require("http");
async function getRelevantFoodOutlets(city, maxCost) {
     
      const response = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}`);
          const result = await response.data;
             const {total_pages} = result;
             var foodOutlets =[];
          for(const count of Array.from({length:total_pages},(_,i)=>i+1)){
const response =await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${count}`);
const result = await response.data;
const {data} = result;


for(const item of data){
    if(( item.estimated_cost)<= maxCost){
        var newFoodOutlets = foodOutlets.push(item.name);
      
    };
}
     
          }
           
          return foodOutlets;
          
}


async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const city = readLine();
    const maxCost = parseInt(readLine());

    const result = await getRelevantFoodOutlets(city, maxCost);
    
    ws.write(result.join('\n') + '\n');

    ws.end();
}