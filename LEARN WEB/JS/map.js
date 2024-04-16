const arr = [5,2,6,1,8];
// Double - [10,4,12,2,16];
//Triple - [15,6,,18,3,24];
// Bianry - ["101","10","110","1","1000"];

//Double
// function double(x){
//     return x*2;
// }
// const output = arr.map(double);
// console.log(output);

//Triple
// function triple(x){
//     return x*3;
// }
// const output = arr.map(triple);
// console.log(output);

//Binary
function binary (x){
    return x.toString(2);
}
const output = arr.map(binary);
console.log(output);