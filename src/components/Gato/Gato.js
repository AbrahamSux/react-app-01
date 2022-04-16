import React, { Component } from "react";

class GatoApp extends Component {

    state = {
        fuerza: 100,
        vidasRestantes: 7,
        name: 'chimiuil'
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     * 
     * @returns El elemento construido.
     */
    render() {

        const datosNocturnos = {
            peleasNocturnas: 15,
            tiempoFueraDeCasa: '5 horas'
        }

        const otrosDatos = {
            raza: 'Irlandesa',
            salud: 'Excelente',
            pelaje: 'Pelo Largo'
        }

        return (
            <div>
                <Gato name='Garfield' age='2 años' datosNocturnos={datosNocturnos} />
                <Gato
                    name='Tango'
                    age='1 año y medio'
                    otrosDatos={otrosDatos}
                    {...datosNocturnos}
                    {...this.state}
                />
            </div>
        )
    }

}

const Gato = (props) => (
    <div>
        <h1>Gato {props.name} 🐱</h1>
        <pre>
            {JSON.stringify(props, null, 4)}
        </pre>
    </div>
)

export default GatoApp