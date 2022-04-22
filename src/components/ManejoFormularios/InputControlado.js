import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class InputControladoApp extends Component {

    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render() {
        return (
            <div>
                <h1>
                    Inputs Controlados <Unicorn />
                </h1>
                <InputControlado />
            </div>
        )
    }

}

class InputControlado extends Component {

    state = {
        text: '',
        tieneError: true,
        color: '#E8E8E8'
    }



    // MÉTODOS

    /**
     * Arrow Function - Utilizada mandar los datos del formulario.
     * 
     * @param {*} event 
     */
    actualizar = (event) => {
        console.log('>> actualizar() ')
        console.log(event.target)

        const text = event.target.value
        let tieneError = true
        let color = '#E8E8E8'

        // Si solo está vacio, entonces:
        if (text.trim() === '') {
            color = '#E8E8E8'
            tieneError = true
        }

        // Si no está vacio y tiene menos de 5 caracteres, entonces:
        if (text.trim() !== '' && text.length < 5) {
            color = 'red'
            tieneError = true
        }

        // Si no está vacio y tiene más de 5 caracteres, entonces:
        if (text.trim() !== '' && text.length >= 5) {
            color = 'green'
            tieneError = false
        }

        this.setState({
            text, tieneError, color
        })
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render() {

        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }

        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.actualizar} style={styles} />
                {this.state.tieneError ? null : <Correcto />}
            </div>
        )
    }

}



// COMPONENTES FUNCIONALES

const Unicorn = () => {
    return (
        <span role='img' aria-label="unicornio">
            🦄
        </span>
    )
}

const Correcto = () => {
    return (
        <span role='img' aria-label="correcto">
            ✔️
        </span>
    )
}



// EXPORT 

export default InputControladoApp
