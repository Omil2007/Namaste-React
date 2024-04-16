//   ASYNC

// async always return a promise
//if its returning a value its wrapped in a promise but always return a promise 

// async function getData(){
//     return "Namaste";
// }

// const dataPro = getData();

// dataPro.then((res) => console.log(res));

// const p = new Promise((resolve,reject) => {
//     resolve("Promise Resolved Value !");
// });

// async function getD(){
//     return p;
//     // here it dont wrapped in a promise it passes as it is as its already a promise 
// }

// const dataPromise = getD();

// dataPromise.then((res) => console.log(res));


//   AWAIT

// await is a keyword that can only be used inside a async function

// const p1 = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 Resolved");
//     },5000);
// });

// const p2 = new Promise((reslove,reject) => {
//     setTimeout(() => {
//         reslove("Promise 2 Resloved");
//     },10000);
// });

// async function HandlePromise(){
//     console.log("Hello World!!");
    
//     const val = await p1;
//     // here it waits for val to get the value as we used await
//     console.log("Namaste JavaScript");
//     console.log(val);

//     const val2 = await p2;
//     // same here it waits for val2 to get the value
//     console.log("Namaste JavaScript 2");
//     console.log(val2);

//     console.log("Hello World!!");
// }
// HandlePromise();

// here the async await doesn't block the main thread of java script in await the funtion HandleProblem suspended from the call stack while its waiting and get return in call stack when its ready to execute



