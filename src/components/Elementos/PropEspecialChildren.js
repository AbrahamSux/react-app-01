import React, { Component } from 'react'

// COMPONENTES CON ESTADOS

class PropChindrenApp extends Component {

    state = {
        uiColor: 'purple'
    }



    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     * 
     * @returns El elemento construido.
     */
    render () {

        const {uiColor} = this.state

        return (
            <div>
                <Title uiColor={uiColor}>
                    Super <em>Ninja</em>
                </Title>
            </div>
        )
    }

}



// COMPONENTES FUNCIONALES

const Title = (props) => {

    console.log(props)

    const { uiColor } = props

    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }

    return (
        <div style={styles}>
            <h1> {props.children} </h1>
        </div>
    )
}



// EXPORT

export default PropChindrenApp
