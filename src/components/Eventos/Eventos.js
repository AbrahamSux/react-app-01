/**
 * Ejemplo implementando el uso de eventos de Mouse.
 */
import React, { Component } from "react";

const styles = {
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

class EventosApp extends Component {

    state = {
        x: 0,
        y: 0
    }



    // ARROW FUNCTIONS

    manejador = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    mostrarAlerta = () => {
        alert('Hola Mundo...')
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     * 
     * @returns El elemento construido.
     */
    render () {
        return (
            <div style={styles} onMouseMove={this.manejador} >
                <button onClick={this.mostrarAlerta}>Disparar con 1 Click</button>
                <br/>
                <button onDoubleClick={this.mostrarAlerta}>Disparar con 2 Clicks</button>
                <br/>
                <hr/>
                <div>X = {this.state.x}</div>
                <div>Y = {this.state.y}</div>
            </div>
        )
    }

}

export default EventosApp
