import React from "react";
import ReactDOM from "react-dom/client";


// writing component using JSX
    const element = (<div id="Parent">
        <div id="child">
            <h1>Hi i am from h1 tage</h1>
        </div>
    </div>)

    
    console.log(element);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);