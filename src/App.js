import React from "react";
import TarjetaFruta from './components/TarjetaFruta'
import Contador from './components/Contador'



var frutaExotica = 'Fruta del Dragón'

function App() {
  return (
    <div>
     <TarjetaFruta name='Naranja' price={6.00}  />
     <TarjetaFruta name={'Sandia'} price={25.00}/>
     <TarjetaFruta name={`${frutaExotica}`} price={55.50} />
     <br/>
     <hr/>
     <Contador />
   </div>
  );
}

export default App;
