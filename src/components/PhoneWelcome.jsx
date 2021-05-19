import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoBePositive from '../assets/img/Logo-be-positive-happy.svg';

const PhoneWelcome = (props) => {
  return (
    <Fragment>
      <div className="home-phone-welcome">
        <div className="home-phone-logos">
          <figure className="phone-logo-happy">
            <img src={LogoBePositive} alt="vector-happy" />
          </figure>
        </div>
        <div className="wrapper">
          <div className="home-phone-body">
            <div>
              <p className="welcome-text">Bienvenido!</p>
              <h4 className="connect-followers-text">
                Conecta con tus seguidores
              </h4>
              <Link to="/SignIn">
                <button className="btn btn-phone btn-phone-logIn">
                  Iniciar Sesión
                </button>
              </Link>
              <button
                className="btn btn-phone btn-phone-accounts"
                onClick={() => props.handleModal()}
              >
                Iniciar sesión con otra cuenta
              </button>
            </div>
            <div className="phone-new-user">
              <p className="new-user">
                ¿Eres un nuevo usuario?{' '}
                <span>
                  <Link to="/SignUp">Crear una cuenta</Link>
                </span>
              </p>
            </div>
          </div>
          <footer>
            <hr />
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default PhoneWelcome;
