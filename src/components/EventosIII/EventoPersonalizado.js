/**
 * Ejemplo implementando eventos personalizados usando componentes padres e hijos.
 */
import React, { Component } from "react";
import styles from './global.module.css'

class Hijo extends Component {

    manejadorClicks = () => {
        console.log(this.props)

        this.props.onSaluda('Ya eres un Ninja en React 🔥')
    }

    render () {
        
        const estilo = styles.box + ' ' + styles.blue

        return (
            <div className={estilo}>
                <h2>Hijo</h2>
                <button
                    onClick={this.manejadorClicks}
                >Saludar</button>
            </div>
        )
    }
}

class EventoPersonalizado extends Component {

    state = {
        mensaje: 'Hola Mundo...'
    }



    // MÉTODOS

    manejador = (mensaje) => {
        console.log(mensaje)

        this.setState({ mensaje })

        alert(`Hey, ${mensaje}`)
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     * 
     * @returns El elemento construido.
     */
    render () {
        const estilo = styles.box + ' ' +styles.red
        
        return (
            <div className={estilo}>
                <Hijo 
                    onSaluda={this.manejador}
                />
                <h1>Mensaje: {this.state.mensaje}</h1>
            </div>
        )
    }

}

export default EventoPersonalizado
