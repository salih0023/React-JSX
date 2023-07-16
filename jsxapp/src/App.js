import React from 'react';
import Products from './Products';


const App = () => {
  return (
    <div>
      <h1>hello react </h1>
      <Products nama={"ballo"} price={25} description={"Grosse balle à jouer, le plus souvent ronde, généralement formée d'une vessie gonflée d'air et recouverte d'une peau cousue, utilisée dans les sports d'équipe comme le football, le rugby, le basket-ball, le handball, le volley-ball."} img={"https://unsplash.com/fr/photos/LTyPTQ2tgNA"} />
    </div>
  );
}

export default App;
