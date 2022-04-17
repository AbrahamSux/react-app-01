import React, { Component } from "react";
import ReactDOM from 'react-dom';



// COMPONENTES CON ESTADO

class PortalModalApp extends Component {

  // RENDER

  /**
   * Utilizado para renderizar los elementos.
   * 
   * @returns - El elemento construido.
   */
  render() {
    console.log(this.props)

    // Si NO recibe la propiedad 'visible' no se mostrará nada del modal en pantalla.
    if (!this.props.visible) {
      return null
    }

    // En caso contrario, mostrará lo siguiente:

    const styles = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2',
      opacity: '0.9',
      color: '#FFF'
    }

    return ReactDOM.createPortal(
      // Marcado/Elemento a Montar.
      (
        <div style={styles}>
          <h3>Portal Modal</h3>
          <hr/>
          {this.props.children}
        </div>
      ),
      // Puntero hacia donde se va a montar.
      document.getElementById('modal-root')
    );
  }

}

class App extends Component {

  state = {
    visible: false,
    num: 0
  }



  // ARROW FUNCTIONS

  mostrar = () => {
    this.setState({
      visible: true
    })
  }

  cerrar = () => {
    this.setState({
      visible: false
    })
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(state => ({
        num: state.num +1
      })
      )
    }, 5000)
  }



  // RENDER

  /**
   * Utilizado para renderizar los elementos.
   * 
   * @returns - El elemento construido.
   */
  render() {
    return (
      <div>
        <button onClick={this.mostrar}>
          Mostrar
        </button>
        <PortalModalApp visible={this.state.visible}>
          <h1>Hola desde un Portal Modal {this.state.num}</h1>
          <br/>
          <button onClick={this.cerrar}>
            Cerrar
          </button>
        </PortalModalApp>
      </div>
    )
  }

}



// EXPORT

export default App;
