import React, { Component } from "react";



// COMPONENTES BASADOS EN CLASE

class APIRest extends Component {

    state = {
        users: [],
        cargando: true
    }



    // MÉTODOS

    /**
     * Utilizado para inicializarse al cargar el componente.
     */
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res)

            return res.json()
        })
        .then(users => {
            console.log(users)

            this.setState({ 
                users,
                cargando: false
            })
        })
        .catch((error) => {
            // MANEJO DE LA EXCEPCIÓN.
        })

        // EJECUTAR LO SIGUIENTE, DESPUÉS DE TRES SEGUNDO.
        /*setTimeout(() => {
            this.setState({
                text: 'Hola React'
            })
        }, 3000)*/
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render() {

        if (this.state.cargando) {
            return <h1>Cargando...</h1>
        }

        return (
            <div>
                <h1>Petición HTTP</h1>
                <h2></h2>
                <ul>
                    { this.state.users.map((user) => (
                        <li key={user.id}>
                            <strong>Name: </strong>{ user.name } - <a href={`https://${ user.website }`} >Website</a>
                        </li>
                    )) }
                </ul>
            </div>
        )
    }

}



// EXPORT

export default APIRest
