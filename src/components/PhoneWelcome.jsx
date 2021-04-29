import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import LogoBePositive from '../assets/img/Logo-be-positive-happy.svg';

const PhoneWelcome = (props) => {

  return (
    <Fragment>
      <div className="home-phone-welcome">
        <section className="home-phone-logos">
          {/* <LogoBePositive /> */}
          <figure className="phone-logo-happy">
            <img src={LogoBePositive} alt="vector-happy" />
          </figure>
        </section>
        <section className="home-phone-body">
          <p>Bienvenido!</p>
          <h4>Conecta con tus seguidores</h4>
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
          <div className="phone-new-user">
            <p className="new-user">
              ¿Eres un nuevo usuario?{' '}
              <span>
                <Link to="/SignUp">Crear una cuenta</Link>
              </span>
            </p>
          </div>
        </section>
        <footer>
          <hr />
        </footer>
      </div>
    </Fragment>
  );
};

export default PhoneWelcome;
