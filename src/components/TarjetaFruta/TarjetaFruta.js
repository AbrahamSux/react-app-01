import React from "react";

class TarjetaFruta extends React.Component {

  state = {
    cantidad: 0
  }


  // ARROW FUNCTIONS

  agregar = () => this.setState({
    cantidad: this.state.cantidad + 1
  })

  remover = () => {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }

  limpiar = () => {
    this.setState({
      cantidad: 0
    })
  }



  // RENDER

  /**
    * Utilizado para retornar los elementos.
    * 
    * @returns El elemento construido.
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

export default TarjetaFruta