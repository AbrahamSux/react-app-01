import React, { Component } from "react";



// COMPONENTES CON ESTADO

class RefsApp extends Component {



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {

        return (
            <div>
                <h1>React Refs</h1>
                <Entrada />
            </div>
        )
    }

}

class Entrada extends Component {

    // REFERENCIAS
    entrada = React.createRef()



    // MÉTODOS

    /**
     * Utilizado para inicializarse al cargar el componente.
     */
    componentDidMount () {
        this.focus()
    }

    /**
     * Arrow Function utilizada para posicionarse dentro del input.
     */
    focus = () => {
        console.log(this.entrada)

        this.entrada.current.focus()
    }

    /**
     * Arrow Function utilizada para salirse del input.
     */
    blur = () => {
        this.entrada.current.blur()
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
                <input ref={this.entrada} />
                <button onClick={this.focus}>Focus</button>
                <button onClick={this.blur}>Blur</button>
            </div>
        )
    }

}



// EXPORT

export default RefsApp
