import React from "react";

const user01 = {
    name: 'Abraham Juárez',
    username: 'AbrahamSux',
    country: 'México',
    social: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/'
    }
}

// COMPONENTES FUNCIONALES

/**
 * Utilizado para mostrar la Destructuración Anidad de un Objeto.
 * 
 * @param {object} user - El usuario.
 */
const destructuracionDeObjecto = (user) => {
    console.log(user)

    // var { username='AjSux' } = user
    // const {facebook} = social


    // Recuperando un valor utilizando "Destructuración anidada".
    // NOTA: la palabra 'social' ya no se podrá usar, sino que solo su propiedad 'facebook' recuperada.
    const { name, social: {facebook, twitter: tw} } = user

    var { username: aliasCool } = user
    

    console.log(`Hola soy ${name} o puedes llamarme ${aliasCool}, mi tengo ${facebook} & ${tw}`)
}

/**
 * Utilizado para mostrar la Destructuración Anidad de una Lista/Array.
 */
const destructuracionDeListas = () => {

    const orden = ['pizza', 'te verde', 'pay', 123, false, 'otro']

    const [comida, bebida, postre, ...restoLista] = orden

    console.log(`Mi platillo será: para comer una ${comida}, de tomar quiero un ${bebida} y como postre un ${postre}.`)
    console.log(`El resto de la lista es: ${restoLista}`)
}



console.log('>>>>> INICIA  : PROCESO DESTRUCTURACION ... ')

destructuracionDeObjecto(user01)

destructuracionDeListas()

console.log('<<<<< TERMINA : PROCESO DESTRUCTURACION. ')
