import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class ComponentErrorApp extends Component {

    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {

        return(
            <div>
                <LimiteErrores>
                <Boton />
                </LimiteErrores>
                <LimiteErrores>
                <Boton />
                </LimiteErrores>
            </div>
        )
    }

}

class Boton extends Component {

    state = {
        dispararError: false
    }



    // MÉTODOS

    dispatchError = () => {
        console.log('>> dispatchError()')

        this.setState( {
            dispararError: true
        } )
    }



    // RENDER
    
    render () {
        console.log('>> Boton.render()')
        console.log(this.state)

        if (this.state.dispararError) {
            throw new Error('Lo siento he fallado 🔥🔥🔥')
        }

        return(
            <button onClick={this.dispatchError}>
                Botón con Bugs
            </button>
        )
    }

}

class LimiteErrores extends Component {

    state = {
        tieneError: false
    }



    // MÉTODOS

    /**
     * Manejo de excepciones generadas en los componentes.
     */
    componentDidCatch (error, errorInfo) {
        console.log('>> componentDidCatch()')
        console.log(errorInfo)

        this.setState( {
            tieneError: true,
            error
        } )
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {
        console.log('>> LimiteErrores.render()')
        console.log(this.props.children)

        if (this.state.tieneError) {
            return (
                <div>
                    Wops! Algo ha salido mal, puede recargar o contactar con el equipo de soporte 🔧
                    <div 
                        style={ {
                            color: 'orangered'
                        } }
                    >
                        {this.state.error && this.state.error.toString()}
                    </div>
                </div>
            )
        }
        
        return this.props.children
    }

}



// EXPORT

export default ComponentErrorApp
