import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class FormSelectMultipleApp extends Component {

    state = {
        techs: [ 'React' ]
    }



    // MÉTODOS

    /**
     * Arrow Function - 
     */
    handleChange = (event) => {
        console.log('>> handleChange()')
        console.log(event)

        // OPCION 1
        /*const techs = Array.from(
            event.target.selectedOptions,
            (opcion) => opcion.value
        )*/

        // OPCION 2
        const techs = Array.from(
            event.target.selectedOptions
        ).map(opcion => opcion.value)

        console.log(techs)

        this.setState( { techs } )
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
                    <select 
                        defaultValue={this.state.techs} 
                        onChange={this.handleChange} 
                        multiple
                    >
                        <option value='Angular'>Angular</option>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Vanilla'>Vanilla</option>
                    </select>
                </form>
                <p>
                    Opción seleccionada: <strong>{this.state.techs}</strong>
                </p>
                <ul>
                    {this.state.techs.map(tech => (
                        <li key={tech}> {tech} </li>
                    ) )}
                </ul>
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

export default FormSelectMultipleApp
