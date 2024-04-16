const arr = [5,1,3,2,6];
// filter odd values

function odd(x){
    if(x%2 !== 0){
        return x;
    }
}
const output = arr.filter(odd);
console.log(output);

const output1 = arr.filter((x) => x%2==0);
console.log(output1);

const output2 = arr.filter((x) => x<3);
console.log(output2);