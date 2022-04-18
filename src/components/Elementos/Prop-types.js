import React, { Component } from "react";
import PropTypes from 'prop-types';


const noop = () => {}



// COMPONENTES CON ESTADO

class Profile extends Component {

  // Validación de propiedades.
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  // Propiedades por default.
  static defaultProps = {
    bio: 'Soy un desarrollador FullStack',
    onHello: noop
  }



  // ARROW FUNCTIONS

  saludar = () => {
    console.log(this.props)
    this.props.onHello()
  }



  // RENDER

  /**
   * Utilizado para renderizar los elementos.
   *
   * @returns - El elemento construido.
   */
  render() {

    const { name, bio, email, age } = this.props

    return (
      <div>
        <h1>Nombre: {name}</h1>
        <p>
          {`${bio}, y tengo ${age} años de edad.`}
        </p>
        <a href={`mailto: ${email}`}>
          {email}
        </a>
        <br/><br/>
        <button onClick={this.saludar}>
          Saludar
        </button>
      </div>
    )
  }

}

/*Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number
};*/

class PropTypesApp extends Component {

  // RENDER

  /**
   * Utilizado para renderizar los elementos.
   *
   * @returns - El elemento construido.
   */
  render() {
    return (
      <div>
        <Profile
          name={'Abraham Juárez'}
          email={'abraham.juarez@gmail.com'}
          age={28}
        />
      </div>
    )
  }

}



// EXPORT

export default PropTypesApp;
