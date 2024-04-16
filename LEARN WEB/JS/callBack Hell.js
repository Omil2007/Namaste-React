console.log("Namaste");

setTimeout(function(){
    console.log("JavaScript");
},5000);

console.log("Season 2");

// what is a callBack Hell
api.createOrder(cart,function(){

    api.proceedToPayment(function(){
    
        api.showOrderSummary(function(){

            api.updateWallet();

        });
    });
});

// the innner api's are depended on their parent function which is very risky