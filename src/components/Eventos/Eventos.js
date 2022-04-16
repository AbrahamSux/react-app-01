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
        y: 0,

        text: '',
        evento: ''
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

    manejadorInput = (event) => {
        console.log(event.target.value)

        this.setState({
            text: event.target.value,
            evento: event.type
        })
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
                <br/>
                <hr/>
                <div>
                    <input 
                        type="text" 
                        onChange={this.manejadorInput}
                        onCopy={this.manejadorInput}
                        onPaste={this.manejadorInput}
                    />
                    <h1> {this.state.text} </h1>
                    <h2> {this.state.evento} </h2>
                </div>
            </div>
        )
    }

}

export default EventosApp
