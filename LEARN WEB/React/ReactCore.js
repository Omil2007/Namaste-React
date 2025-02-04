// how can i make this kind a structure in react without    (JSX)

// <div id="parent">
// <div id="child">
//     <h1>I'm h1 tag</h1>
//     <h2> I'm H2 tag</h2>
// </div>
// <div id="child2">
//     <h1>I'm h1 tag</h1>
//     <h2> I'm H2 tag</h2>
// </div>
// </div>

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child"},[
        React.createElement("h1" , {}, "I'm an h1 tag"),
        React.createELement("h2",{},"I'm an h2 tag"),
    ]),
    React.createElement("div",{id: "child"},[
        React.createElement("h1" , {}, "I'm an h1 tag"),
        React.createELement("h2",{},"I'm an h2 tag"),
    ]),
]);

console.log(parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 