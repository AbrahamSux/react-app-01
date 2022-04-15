/**
 * Ejemplo implementando la creación de componentes mediante el uso de clases.
 */
import React from 'react'

class TarjetaFruta extends React.Component {
  
  constructor() {
      super()
      
      this.state = {
        cantidad: 0
      }
  }

  /**
   * Utilizado para retornar los elementos.
   * 
   * @returns El elemento.
   */
  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <div>Cantidad : {this.state.cantidad} </div>
        <button onClick={() => {
            this.setState({
              cantidad: this.state.cantidad + 1
            })
          } 
        }> Agregar </button>
        <hr/>
        <p>Precio de Venta: ${this.props.price}</p>
        <br/>
      </div>
    )
  }

}

var frutaExotica = 'Fruta del Dragón'

const Example05 = () => (
  <div>
    <TarjetaFruta name='Naranja' price={6.00}  />
    <TarjetaFruta name={'Sandia'} price={25.00}/>
    <TarjetaFruta name={`${frutaExotica}`} price={55.50} />
  </div>
)

export default Example05
