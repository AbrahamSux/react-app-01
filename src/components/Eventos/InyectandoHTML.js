import React, { Component } from "react";

class Inyectando extends Component {

    state = {
        marcado: `
        <br/>
        <hr/>
        <h1>Inyectando HTML con React</h1>
        <br/>
        <a href="#">Algún Link</a>
        `
    }


    render () {
        return (
            <div>
            <div dangerouslySetInnerHTML={ {__html: this.state.marcado} }
            >
            </div>
        </div>
        )
    }
}

export default Inyectando
