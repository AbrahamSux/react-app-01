import React, { Component } from "react";



// COMPONENTES CON ESTADO

class PropiedadObjeto extends Component {

    state = {
        user: {
            name: 'Abraham Juárez',
            country: 'México',
            twitter: '@AbrahamSux',
            youtube: 'none'
        }
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {
        console.log(this.state)

        // RECUPERAMOS EL USUARIO USANDO DESTRUCTURACIÓN.
        const {user} = this.state
        
        const keys = Object.keys(user)
        console.log(`Keys: ${keys}`)

        return (
            <div>
                <h3>Iterando propiedades de objetos</h3>

                <ul>
                    {keys.map(key => (
                        <li><strong>{ key }</strong> : { user[key] }</li>
                    ))}
                </ul>
            </div>
        )
    }

}



// EXPORT
export default PropiedadObjeto
