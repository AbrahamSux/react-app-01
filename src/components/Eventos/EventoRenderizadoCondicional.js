import React from "react";

// COMPONENTES

const Saludo = (props) => {
    console.log(props)

    return (
        <div>
            <div> {props.name && <strong>{props.name}</strong>} </div>
            {props.saluda ? 
            (
                <h1>Hola, tΓΊ eres genial π</h1>
            ) : 
            (
                <p>
                    Wops, no hay saludos para ti! π
                </p>
            )
            }
        </div>
    )
}

const SaludoApp = () => (
    <div>
        <Saludo saluda={true}/>
    </div>
)

export default SaludoApp
