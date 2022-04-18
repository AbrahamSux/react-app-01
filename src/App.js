import React from "react";
import TarjetaFruta from './components/TarjetaFruta'
import Contador from './components/Contador'
import GatoApp from './components/Gato'
import EventosApp from "./components/Eventos/Eventos";
import PersistenciaEventosApp from "./components/Eventos/PersistenciaEventos";
import EventoPersonalizado from "./components/Eventos/EventoPersonalizado";
import SaludoApp from "./components/Eventos/EventoRenderizadoCondicional";
import Inyectando from "./components/Eventos/InyectandoHTML";
import PropChindrenApp from "./components/Elementos/PropEspecialChildren";
import FragmentApp from "./components/Elementos/Fragments";
import PropTypesApp from "./components/Elementos/Prop-types";
import ListaElementos from "./components/Listas/ListaElementos";
import ListaObjeto from "./components/Listas/ListaObjetos";


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
     <Inyectando />
     <br/>
     <hr/>
     <PropChindrenApp />
     <br/>
     <hr/>
     <FragmentApp />
     <br/>
     <hr/>
     <PropTypesApp />
     <br/>
     <hr/>
     <ListaElementos />
     <br/>
     <hr/>
     <ListaObjeto />
   </div>
  );
}

export default App;
