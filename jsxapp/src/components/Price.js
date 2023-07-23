import React from "react";
import Products from "./Products";


const Price = () => { 
    //console.log(Data)
    return(
        <div>
            <h1 className="prix">{Products[0].prix}</h1>
            {/* Ceci nous permet d'iterer tous les elements de notre fichier de donnees Data */}
            {/* {
                Data.map((index)=>index.price)
            } */}
        </div>
    )
}

export default Price;