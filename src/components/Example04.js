/**
 * Ejemplo utilizado componentes implementado el uso de props.
 */
import React from "react";

const TarjetaFruta = (props) => {
    console.log(props)
    
    return (
      <div>
        <h3>{ props.name }</h3>
        <hr/>
        <p>Precio de Venta: ${props.price}</p>
      </div>
    )
  }
  
  
  var frutaExotica = 'Fruta del Dragón'
  
  const Example04 = () => (
    <div>
      <TarjetaFruta name='Naranja' price={6.00}  />
      <TarjetaFruta name={'Sandia'} price={25.00}/>
      <TarjetaFruta name={`${frutaExotica}`} price={55.50} />
    </div>
  )
  
  export default Example04