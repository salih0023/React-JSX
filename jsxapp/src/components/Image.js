import React from "react";
import Products from "./Products";

const Image = () => {
    return(
        <div>
            <h1 className="img">{Products[0].img}</h1>
        </div>
    )
}

export default Image;