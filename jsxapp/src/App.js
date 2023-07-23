import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./components/Style.css";

const App = () => {
  return (
    <div className="app">
      <Name />
      <Price />
      <Description />
      <Image />
      <h1 className="message">Hello Saliou ! </h1>
    </div>
  );
}


export default App;
