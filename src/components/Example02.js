/**
 * Ejemplo implementado el uso de elementos.
 */
import React from "react";

/**
 * Ejemplo I: de como leer constantes.
 */
const name = 'Abraham Juárez'

// const Example02 = <h1>Hola {name}</h1>


/**
 * Ejemplo II: de como leer objetos.
 */
const user01 = {
    name: 'Abraham Juárez',
    age: 28,
    country: 'México'
}

//const Example02 = <h2>{user01.name} tiene {user01.age} años, y vive en {user01.country}</h2>


/**
 * Ejemplo III: usando funciones con paso de parámetros.
 * 
 * @param {*} user El parámetro recibido.
 * @returns 
 */
function getInfo(user) {
    return `${user.name} tiene ${user.age} años, y vive en ${user.country}.`
}
  
const Example02 = <h2> {getInfo(user01)} </h2>


export default Example02