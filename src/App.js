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
import PropiedadObjeto from "./components/Listas/PropiedadesObjeto";
import PropKeyApp from "./components/Listas/PropKey";
import IterarComponentesApp from "./components/Listas/IteracionComponentes";
import SelectDatoEnListaApp from "./components/Listas/SelectDatoEnLista";
import RefsApp from "./components/Refs/RefsApp";
import IntegrarLibreriaApp from "./components/Refs/IntegrarLibrerias";
import ForwardrefApp from "./components/Refs/RefConForwardref";
import InputNoControladoApp from "./components/ManejoFormularios/InputsNoControlados";
import InputControladoApp from "./components/ManejoFormularios/InputControlado";
import FormSelectApp from "./components/ManejoFormularios/FormularioSeleccion";
import FormSelectMultipleApp from "./components/ManejoFormularios/FormSelectMultiple";
import FormCheckboxApp from "./components/ManejoFormularios/FormCheckbox";
import ComponentErrorApp from "./components/ControlErrores/ComponenteErrores";



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
     <br/>
     <hr/>
     <PropiedadObjeto />
     <br/>
     <hr/>
     <PropKeyApp />
     <br/>
     <hr/>
     <SelectDatoEnListaApp />
     <br/>
     <hr/>
     <RefsApp />
     <br/>
     <hr/>
     <IntegrarLibreriaApp />
     <br/>
     <hr/>
     <ForwardrefApp />
     <br/>
     <hr/>
     <InputNoControladoApp />
     <br/>
     <hr/>
     <InputControladoApp />
     <br/>
     <hr/>
     <FormSelectApp />
     <br/>
     <hr/>
     <FormSelectMultipleApp />
     <br/>
     <hr/>
     <FormCheckboxApp />
     <br/>
     <hr/>
     <ComponentErrorApp />
     <br/>
     <hr/>
     <IterarComponentesApp />
     
   </div>
  );
}

export default App;
