import React, { Component } from "react";



const frutas = [
    'fresa',
    'manzana',
    'sandia',
    'kiwi',
    'durazno',
    'mango',
    'piña'
]



// COMPONENTES CON ESTADO

class ListaElementos extends Component {

    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render() {
        return (
            <div>
                <ul>
                    { frutas.map((fruta) => {
                        return (
                            <li>{ fruta }</li>
                        )
                    } ) }
                </ul>
            </div>
        )
    }

}



// EXPORT

export default ListaElementos
