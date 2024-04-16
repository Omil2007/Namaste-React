const cart = ["shoes","pants","kurta"];
const promise = createOrder(cart); //orderId

promise 
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(orderId){
        console.log("whatever happens , this will be called.");
    });


// producer
function createOrder (cart){
    const pr = new Promise(function(resolve,reject){
        //creteOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("omil");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    }); 
}
function validateCart(cart){
    return false;
}