import React from "react";
import Products from "./Products"; 

const Description = () => {
    return(
        <div>
            <h1 className="description">{Products[0].description}</h1>
        </div>
    )
}

export default Description;
