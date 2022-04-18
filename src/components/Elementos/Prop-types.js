import React, { Component } from "react";
import PropTypes from 'prop-types';



// COMPONENTES CON ESTADO

class Profile extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string,
    age: PropTypes.number.isRequired
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
          bio={'Soy un desarrollador FullStack'}
          email={'abraham.juarez@gmail.com'}
          age={28}
        />
      </div>
    )
  }

}



// EXPORT

export default PropTypesApp;
