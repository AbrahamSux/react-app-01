import React, { Component, Fragment } from "react";



// COMPONENTES CON ESTADOS

class FragmentApp extends Component {

    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     * 
     * @returns El elemento construido.
     */
    render () {
        return (
            <div>
                <Computacion />
                <Ropa />
                <Calzado />
            </div>
        )
    }

}



// COMPONENTES FUNCIONALES

const Computacion = () => (
    <Fragment>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>
    </Fragment>
)

const Ropa = () => (
    <React.Fragment>
        <li>Playera</li>
        <li>Jeans</li>
        <li>Shorts</li>
    </React.Fragment>
)

const Calzado = () => (
    <ul>
        <li>Tenis</li>
        <li>Zapato</li>
    </ul>
)



// EXPORT

export default FragmentApp
