import React, { Component } from "react";

class PersistenciaEventos extends Component {

    state = {
        color: 'blue'
    }



    // ARROW FUNCTIONS

    handlerChange = (event) => {
        console.log(event.target.value)

        const color = event.target.value
        this.setState( state => ({
            color
        }))
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     * 
     * @returns El elemento construido.
     */
    render () {
        return(
            <div>
                <input 
                    type="text"
                    onChange={this.handlerChange}
                />
                <h1 
                    style={ {color: this.state.color} }
                > {this.state.color} </h1>
            </div>
        )
    }

}

const PersistenciaEventosApp = () => (
    <div>
        <PersistenciaEventos />
    </div>
)

export default PersistenciaEventosApp
