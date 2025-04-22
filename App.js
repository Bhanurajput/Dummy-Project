import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//     "div",{id:"parent"},React.createElement(
//     "div",{id:"child"},[React.createElement("h1",{},"Hi i am h1 tag"),React.createElement("h2",{},"Hi i am h2 tag")])); 

//     const root = ReactDOM.createRoot(document.getElementById("root"));

    const element = (<div id="Parent">
        <div id="child">
            <h1>Hi i am from h1 tage</h1>
        </div>
    </div>)
    console.log(element);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);