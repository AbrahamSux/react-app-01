import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class FormCheckboxApp extends Component {

    state = {
        active: true
    }



    // MÉTODOS

    /**
     * Arrow Function - 
     */
    handleChange = (event) => {
        console.log('>> handleChange()')
        console.log(event)

        this.setState( {
            active: event.target.checked
        } )
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {

        const { active } = this.state

        return(
            <div>
                <h1>Etiqueta Checkbox {active && (<Unicorn />)} </h1>
                <form>
                    <p>
                        <input type='checkbox' checked={active} onChange={this.handleChange} />
                        <label> Mostrar Unicornio</label>
                    </p>
                </form>
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

export default FormCheckboxApp
