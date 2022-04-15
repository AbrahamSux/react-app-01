/**
 * Ejemplo implementando la creación de componentes mediante el uso de clases.
 * 
 * Incorporando el uso de "bind".
 */
import React from 'react'

class TarjetaFruta extends React.Component {
  
  constructor() {
      super()

      // this.agregar = this.agregar.bind(this)
      // this.remover = this.remover.bind(this)

      const METHODS = [
        'agregar', 'remover', 'limpiar'
      ]
  
      METHODS.forEach( (method) => {
        this[method] = this[method].bind(this)
      })
      
      this.state = {
        cantidad: 0
      }
  }

  agregar () {
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }

  remover() {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }

  limpiar() {
    this.setState({
      cantidad: 0
    })
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
        <button onClick={this.agregar}> + </button>
        <button onClick={this.remover}> - </button>
        <button onClick={this.limpiar}> Limpiar </button>
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
