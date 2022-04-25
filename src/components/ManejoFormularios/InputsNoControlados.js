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
                <InputNoControlado onSend={this.onSend} />
                <br/>
                <InputNoControladoForm onSend={this.onSend} />
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

class InputNoControladoForm extends Component {

    // MÉTODOS

    /**
     * Arrow Function - Utilizada mandar los datos del formulario.
     */
    handlerSubmit = (event) => {
        console.log('>> handlerSubmit()')
        console.log(event)

        // Utilizado para evitar recargar el formulario.
        event.preventDefault()

        const nombre = event.target[0].value
        const email = event.target[1].value

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
        return(
            <form onSubmit={this.handlerSubmit}>
                <p>
                    <label htmlFor='nombre'>Nombre: </label>
                    <input id='nombre' type="text" placeholder='Nombre' />
                </p>
                <p>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" placeholder='E-mail' />
                </p>
                <button>Enviar</button>
            </form>
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
