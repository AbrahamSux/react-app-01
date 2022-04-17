import React from "react";
import TarjetaFruta from './components/TarjetaFruta'
import Contador from './components/Contador'
import GatoApp from './components/Gato'
import EventosApp from "./components/Eventos/Eventos";
import PersistenciaEventosApp from "./components/Eventos/PersistenciaEventos";
import EventoPersonalizado from "./components/Eventos/EventoPersonalizado";
import SaludoApp from "./components/Eventos/EventoRenderizadoCondicional";



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
     <br/>
     <hr/>
     <GatoApp />
     <br/>
     <hr/>
     <EventosApp />
     <br/>
     <hr/>
     <PersistenciaEventosApp />
     <br/>
     <hr/>
     <EventoPersonalizado />
     <br/>
     <hr/>
     <SaludoApp />
   </div>
  );
}

export default App;
