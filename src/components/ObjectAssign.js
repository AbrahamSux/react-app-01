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
    twitter: '@AbrahamSux',
    nombre: 'Aj Sux'
}



/**
 * Ejemplo utilizando el uso de "Object.assign" de (ES6).
 */
const resultado = Object.assign(
    {}, 
    perfil,
    region,
    social,
    {
        info: Object.assign(
            {},
            perfil.info,
            region.info
        )
    }
)

console.log(resultado)