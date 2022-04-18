import React, { Component } from "react";
import './IteracionComponentes.css'



const images = [
    {
      author: {
        name: 'Vlad Bagacian',
        avatar: 'https://images.pexels.com/users/avatars/381880/vlad-bagacian-302.jpeg?w=256&h=256&fit=crop&crop=faces'
      },
      source: 'https://images.pexels.com/photos/1368388/pexels-photo-1368388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
      views: 153,
      id: 1
    },
    {
      author: {
        name: 'Moreno Matković',
        avatar: 'https://images.pexels.com/users/avatars/1265479/moreno-matkovic-149.jpeg?w=256&h=256&fit=crop&crop=faces'
      },
      source: 'https://images.pexels.com/photos/2779539/pexels-photo-2779539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
      views: 214,
      id: 2
    },
    {
      author: {
        name: 'Jarod Lovekamp',
        avatar: 'https://images.pexels.com/users/avatars/1263347/jarod-lovekamp-411.jpeg?w=256&h=256&fit=crop&crop=faces'
      },
      source: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
      views: 985,
      id: 3
    },
    {
      author: {
        name: 'Xandro Vandewalle',
        avatar: 'https://images.pexels.com/users/avatars/1431801/xandro-vandewalle-530.jpeg?w=256&h=256&fit=crop&crop=faces'
      },
      source: 'https://images.pexels.com/photos/2763239/pexels-photo-2763239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
      views: 124,
      id: 4
    },
    {
      author: {
        name: 'Two Dreamers',
        avatar: 'https://images.pexels.com/users/avatars/1190917/two-dreamers-438.jpeg?w=256&h=256&fit=crop&crop=faces'
      },
      source: 'https://images.pexels.com/photos/2717087/pexels-photo-2717087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400',
      views: 987,
      id: 5
    }
]

// COMPONENTES CON ESTADO

class IterarComponentesApp extends Component {

    // RENDER

    /**
     * Utilizado para renderizar los elementos.
     *
     * @returns - El elemento construido.
     */
    render () {
        return (
            <div className="images">
                { images.map((image) => (
                    <Imagen 
                        key={image.id}
                        image={image} 
                    />
                )) }
            </div>
        )
    }

}



//COMPONENTES FUNCIONALES

const Imagen = (props) => {
    console.log(props)

    // SE RECUPERA LA PROPIEDAD DE 'image' USANDO DESTRUCTURACIÓN.
    const { image } = props

    return (
        <div className="card">
            <img
                src={image.source}
                alt='Imagen'
                className="image"
            />
            <div className="footer">
                <img
                    src={image.author.avatar}
                    alt='Avatar'
                    className="avatar"
                />
            </div>
            <div className="footer">
                {image.author.name}
            </div>
            <div className="footer">
                {image.views}
            </div>
        </div>
    )
}



// EXPORT

export default IterarComponentesApp
