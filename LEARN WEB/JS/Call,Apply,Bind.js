let name = {
    firstname: "Omil",
    lastname: "Goel",
}

let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state );
}
// call
printFullName.call(name,"Muzaffarnagar","UttarPradesh");

let name2 = {
    firstname: "Mahendra Singh",
    lastname: "Dhoni",
}

// function borrowing 
printFullName.call(name2,"Ranchi","Jharkhand");

// apply
printFullName.call(name2,["Ranchi","Jharkhand"]);

// bind method 
let printMyName = printFullName.bind(name2,"Ranchi","Jharkhand");
console.log(printMyName);
printMyName();


