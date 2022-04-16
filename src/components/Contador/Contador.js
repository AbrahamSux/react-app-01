import React, { Component } from "react";

class Contador extends Component {


    state = {
        video: {
            title: 'Super Video',
            likes: 0
        }
    }



    // ARROW FUNCTIONS

    add = () => {
        /* Forma para evaluar lo interno como un objeto, es decir, ponerlo entre parentesis: => ({}) */
        this.setState((state) => ({
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }



    // RENDER

    /**
      * Utilizado para renderizar los elementos.
      * 
      * @returns El elemento construido.
      */
    render() {
        return (
            <div>
                <h1>
                    {this.state.video.title}
                </h1>
                <button onClick={this.add}>
                    Likes: ( {this.state.video.likes} )
                </button>
            </div>
        )
    }
}

export default Contador