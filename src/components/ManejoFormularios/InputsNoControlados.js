import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class InputNoControladoApp extends Component {

    // MÉTODOS

    /**
     * Arrow Function - 
     */
    onSend = (data) => {
        console.log('>> onSend()')
        console.log(data)
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {

        return (
            <div>
                <h1>
                    Inputs No controlados Refs <Unicorn />
                </h1>
                <InputNoControlado 
                    onSend={this.onSend}
                />
            </div>
        )
    }

}

class InputNoControlado extends Component {

    // REFERENCIAS
    nombre = React.createRef()
    email = React.createRef()



    // MÉTODOS

    /**
     * Arrow Function - Utilizada mandar los datos del formulario.
     */
    handleClick = () => {
        console.log('>> handleClick()')
        console.log(this.nombre.current)
        console.log(this.email.current)

        const nombre = this.nombre.current.value
        const email = this.email.current.value

        // MANEJO DE DATOS
        this.props.onSend( {nombre, email} )
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {

        return (
            <div>
                <input type="text" ref={this.nombre} placeholder='Nombre' />
                <br/>
                <input type="text" ref={this.email} placeholder='E-mail' />
                <br/>
                <button onClick={this.handleClick}>
                    Enviar
                </button>
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



// EXPORT 

export default InputNoControladoApp
