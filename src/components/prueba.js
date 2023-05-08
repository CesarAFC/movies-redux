// function solution(queries) {
//     let container = [];
//     let results = [];
// queries.forEach( (query) => {
//     if(query[0] === 'ADD') {
//         container.push(query[1]);
//         results.push("");
//     } else if(query[0] === 'EXISTS') {

//             let itExist = container.find( (elem) => ( elem === query[1] ))
//             itExist ? results.push("true") : results.push("false");
//     } else if(query[0] === 'REMOVE') {
//         const index = container.indexOf(query[1]);
//         if (index !== -1) {container.splice(index, 1)}
//         //console.log(index)
//         //console.log(container)
//         index !== -1 ? results.push("true") : results.push("false");
//     } else {
//         const orderedArray = container.sort((a, b) => a - b);
//         let isGreater = orderedArray.find( (elem) => ( elem > query[1] ))
//         isGreater ? results.push(isGreater) : results.push('');
//     }
// })

// return results;
// }

// const queries = [
//   ["ADD", "0"],
//   ["ADD", "1"],
//   ["ADD", "1"],
//   ["ADD", "11"],
//   ["ADD", "22"],
//   ["ADD", "3"],
//   ["ADD", "5"],
//   ["GET_NEXT", "0"],
//   ["GET_NEXT", "1"],
//   ["REMOVE", "1"],
//   ["GET_NEXT", "1"],
//   ["ADD", "0"],
//   ["ADD", "1"],
//   ["ADD", "2"],
//   ["ADD", "1"],
//   ["GET_NEXT", "1"],
//   ["GET_NEXT", "2"],
//   ["GET_NEXT", "3"],
//   ["GET_NEXT", "5"],
// ];

// // solution(queries) = ["", "", "", "", "true", "true", "true", "true", "true", "true", "false"].
//  console.log(solution(queries)); 

//  function solution(queries) {
//     let accounts = [];
//     let prompt = [];
//     queries.forEach( (query) => {
//         if(query[0] === 'CREATE_ACCOUNT') {
//             let itExist = accounts.find( (elem) => ( elem.accountId === query[2] ))
//             if (!itExist) {
//                 let newAccount = {'accountId': query[2], 'balance': 0};
//                 accounts.push(newAccount);
//                 prompt.push("true");
//             } else {
//               prompt.push("false");
//             } 
//         } else if (query[0] === 'DEPOSIT' ) {
//             const index = accounts.findIndex( (elem) => (elem.accountId === query[2]) );
//             //let a = accounts.find( (elem) => ( elem === query[2] ))
//             //console.log(a)

//             index !== -1 ? ( accounts[index].balance = accounts[index].balance + Number(query[3]), prompt.push(accounts[index].balance + "" ) ) : prompt.push("");
            
//         } else if(query[0] === 'TRANSFER') {
//             const index = accounts.findIndex( (elem) => (elem.accountId === query[2]) );
//             const indexAccountToTransfer = accounts.findIndex( (elem) => (elem.accountId === query[3]) );
//             console.log(index, indexAccountToTransfer)
//             //index !== -1 ? (accounts[index].balance =  accounts[index].balance - query[3] ): prompt.push("");
//             if(((index || indexAccountToTransfer) !== -1 ) || (index === indexAccountToTransfer)) {
//                 if(accounts[index].balance >= query[4]) {

//                     accounts[index].balance = accounts[index].balance - Number(query[4]) ;
//                     prompt.push(accounts[index].balance+'')
//                     accounts[indexAccountToTransfer].balance = accounts[indexAccountToTransfer].balance + Number(query[4]);
//                 }else {
//                     prompt.push("")
//                 }

//             } else {
//                 prompt.push("")
//             }
//         }
//     })
//     console.log(accounts)
//     return prompt;
//  }

//  const queries = [
//     [
//       "CREATE_ACCOUNT",
//       "1",
//       "acc1"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "2",
//       "acc2"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "3",
//       "acc3"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "4",
//       "acc4"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "5",
//       "acc5"
//     ],
//     [
//       "DEPOSIT",
//       "6",
//       "acc1",
//       "1000"
//     ],
//     [
//       "DEPOSIT",
//       "7",
//       "acc2",
//       "2000"
//     ],
//     [
//       "DEPOSIT",
//       "8",
//       "acc3",
//       "3000"
//     ],
//     [
//       "DEPOSIT",
//       "9",
//       "acc4",
//       "2000"
//     ],
//     [
//       "DEPOSIT",
//       "10",
//       "acc5",
//       "1000"
//     ],
//     [
//       "DEPOSIT",
//       "11",
//       "acc6",
//       "100"
//     ],
//     [
//       "DEPOSIT",
//       "12",
//       "acc7",
//       "1000"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "13",
//       "acc5"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "14",
//       "acc3"
//     ],
//     [
//       "CREATE_ACCOUNT",
//       "16",
//       "acc6"
//     ],
//     [
//       "DEPOSIT",
//       "17",
//       "acc6",
//       "1000"
//     ],
//     [
//       "TRANSFER",
//       "18",
//       "acc6",
//       "acc1",
//       "99"
//     ],
//     [
//       "TRANSFER",
//       "19",
//       "acc6",
//       "acc2",
//       "2"
//     ],
//     [
//       "TRANSFER",
//       "20",
//       "acc6",
//       "acc3",
//       "66"
//     ],
//     [
//       "TRANSFER",
//       "21",
//       "acc6",
//       "acc1",
//       "2"
//     ],
//     [
//       "TRANSFER",
//       "22",
//       "acc6",
//       "acc3",
//       "66"
//     ],
//     [
//       "TRANSFER",
//       "23",
//       "acc6",
//       "acc2",
//       "99"
//     ],
//     [
//       "TRANSFER",
//       "24",
//       "acc6",
//       "acc1",
//       "99"
//     ],
//     [
//       "TRANSFER",
//       "25",
//       "acc6",
//       "acc4",
//       "66"
//     ],
//     [
//       "TRANSFER",
//       "26",
//       "acc6",
//       "acc5",
//       "67"
//     ],
//     [
//       "TRANSFER",
//       "27",
//       "acc6",
//       "acc5",
//       "66"
//     ],
//     [
//       "TRANSFER",
//       "28",
//       "acc6",
//       "acc2",
//       "99"
//     ],
//     [
//       "TRANSFER",
//       "29",
//       "acc6",
//       "acc3",
//       "68"
//     ],
//     [
//       "TRANSFER",
//       "30",
//       "acc6",
//       "acc4",
//       "68"
//     ],
//     [
//       "TRANSFER",
//       "31",
//       "acc6",
//       "acc4",
//       "66"
//     ],
//     [
//       "TRANSFER",
//       "32",
//       "acc6",
//       "acc5",
//       "67"
//     ],
//     [
//       "TRANSFER",
//       "33",
//       "acc7",
//       "acc1",
//       "100"
//     ],
//     [
//       "TRANSFER",
//       "34",
//       "acc1",
//       "acc7",
//       "100"
//     ],
//     [
//       "TRANSFER",
//       "35",
//       "acc6",
//       "acc3",
//       "1"
//     ],
//     [
//       "TRANSFER",
//       "36",
//       "acc3",
//       "acc3",
//       "239"
//     ],
//     [
//       "DEPOSIT",
//       "37",
//       "acc1",
//       "800"
//     ],
//     [
//       "DEPOSIT",
//       "38",
//       "acc2",
//       "800"
//     ],
//     [
//       "DEPOSIT",
//       "39",
//       "acc3",
//       "800"
//     ],
//     [
//       "DEPOSIT",
//       "40",
//       "acc4",
//       "800"
//     ],
//     [
//       "DEPOSIT",
//       "41",
//       "acc5",
//       "800"
//     ],
//     [
//       "DEPOSIT",
//       "42",
//       "acc6",
//       "1000"
//     ],
//     [
//       "TRANSFER",
//       "43",
//       "acc6",
//       "acc3",
//       "991"
//     ],
//     [
//       "TRANSFER",
//       "44",
//       "acc6",
//       "acc3",
//       "1"
//     ]
//   ];

//  ["true", 
//  "true", 
//  "2500", 
//  "3000", 
//  "500", 
//  "1000", 
//  "", 
//  "", 
//  "", 
//  "25", 
//  "", 
//  "", 
//  "true", 
//  ""]
  // console.log(solution(queries)); 

// const init = { input: process.stdin, output: process.stdout}
// const readline = require("readline").createInterface(init)[Symbol.asyncIterator]();

// ( async () => {
//   let line1 = (await readline.next()).value;
//   console.log(line1)
// })();

let line1 = "1,2,3/3,2,1"
const newArray = line1.split('/');
const [array1, array2] = newArray;
const numArray1 = array1.split(',');
const numArray2 = array2.split(',');
let new1 = numArray1.map( elem => Number(elem))
let new2 = numArray2.map( elem => Number(elem))
const sum = new1.map((value, index) => value + new2[index]);

console.log(sum);