import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASES

class ForwardrefApp extends Component {

    // REFERENCIAS
    entrada = React.createRef()



    // MÉTODOS

    /**
     * Utilizado para inicializarse al cargar el componente.
     */
    componentDidMount () {
        console.log('>>>>> INICIA  : PROCESO USANDO forwardRef ... ')
        console.log(this.entrada)
        console.log('<<<<< TERMINA : PROCESO USANDO forwardRef.')
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
                <h1>Reenvio de Refs</h1>
                <FancyInput ref={this.entrada} />
            </div>
        )
    }

}



// COMPONENTES FUNCIONALES HIJOS

const FancyInput = React.forwardRef((props, ref) => {

    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})



// EXPORT 

export default ForwardrefApp
