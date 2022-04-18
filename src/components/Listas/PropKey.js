import React, { Component } from "react";



const users = [
    {
        id: 0, name: 'Abraham Juárez', country: 'México'
    },
    {
        id: 1, name: 'José Madero', country: 'México'
    },
    {
        id: 2, name: 'Jorge Kross', country: 'México'
    },
    {
        id: 3, name: 'Ricardo Treviño', country: 'México'
    },
    {
        id: 4, name: 'Arturo Arredondo', country: 'México'
    }
]

// COMPORNNETES CON ESTADO

class PropKeyApp extends Component {


    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {
        return (
            <div>
                <h1>Iterando Usuarios</h1>
                <ul>
                    { users.map((user) => (
                        <li key={user.id}>
                            { user.name }
                        </li>
                    )) }
                </ul>
            </div>
        )
    }

}



// EXPORT

export default PropKeyApp
