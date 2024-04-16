const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P1 Success"),3000);
});

const p2 = new Promise((resolve,reject) => {
    // setTimeout(() => resolve("P2 Success"),1000);
    setTimeout (() => reject("P2 Fail"),1000);
});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P3 Success"),2000);
    // setTimeout(() => reject("P3 Fail"),2000);
});

// 1 - all (if one throws error in b/w it'll throw throw that exact error immidiatly)
Promise.all([p1,p2,p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
});

// 2 - allSettled(wait for all to get settled)
Promise.allSettled([p1,p2,p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
});

// 3 - race (whoever gets settled first even its error)
Promise.race([p1,p2,p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
});

// 4 - any (first one which is succesfull)
Promise.any([p1,p2,p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
});

// any (aggregateError (in all are rejected))
// Promise.any([p1,p2,p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//     // it'll also give u an arr of errors
//     console.log(err,errors); // u have to write this for arr   
// });