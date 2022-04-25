import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class FormSelectApp extends Component {

    state = {
        tech: 'React'
    }



    // MÉTODOS

    /**
     * Arrow Function - 
     */
    handleChange = (event) => {
        console.log('>> handleChange()')
        console.log(event)

        this.setState( {
            tech: event.target.value
        } )
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {

        return(
            <div>
                <h1>Etiqueta Select <Unicorn/> </h1>
                <form>
                    <select defaultValue={this.state.tech} onChange={this.handleChange} >
                        <option value='Angular'>Angular</option>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Vanilla'>Vanilla</option>
                    </select>
                </form>
                <p>
                    Opción seleccionada: <strong>{this.state.tech}</strong>
                </p>
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

export default FormSelectApp
