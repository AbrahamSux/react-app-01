const perfil = {
    nombre: 'Abraham',
    info: {
        direccion: 'Dirección...'
    }
}

const region = {
    pais: 'México',
    info: {
        coordenadas: 'Coordenadas...'
    }
}

const social = {
    twitter: '@AbrahamSux'
}



/**
 * Ejemplo utilizando el uso del "Operador Spread" de (ES6).
 */
 const resultado = {
    ...perfil,
    ...region,
    ...social,
    nombre: 'Nombre Final',
    info: {
        ...perfil.info,
        ...region.info
    }
}



/**
 * Utilizando arrays/listas.
 */
const frutasVerdes = [
    'kiwi',
    'uva',
    'limon'
]

const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
]

const frutasCombinadas = [
    'pera',
    ...frutasVerdes,
    'mango',
    ...frutasRojas,
    'papaya'
]

console.log('>>>>> INICIA  : PROCESO OPERADOR SPREAD ... ')

console.log(resultado)

console.log(frutasCombinadas)

console.log('<<<<< TERMINA : PROCESO OPERADOR SPREAD. ')
