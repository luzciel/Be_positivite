import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormSignUp from './FormSignUp';
import LogoBePositive from './LogoBePositive';
import IconBack from '../assets/img/Icon-back.svg';

const PhoneTemplateSignUp = (props) => {
  return (
    <Fragment>
      <section className="container-signIn-logo">
        <Link to="/SignIn" className="icon-back">
          <img src={IconBack} className="icon-back" alt="icon-back" />
        </Link>
        <div className="wrap-logo-positive">
          <LogoBePositive />
        </div>
      </section>
      <section className="container-signUp-form">
        <FormSignUp />
        <div className="container-networks">
          <button
            className="btn btn-open-networks"
            onClick={() => props.handleModal()}
          >
            Registrarse con otra cuenta
          </button>
        </div>
      </section>
      <section className="container-enterokay">
        <p className="enterokay-question">
          ¿Ya eres usuario?{' '}
          <span>
            <Link to="/" className="enterokay-link">
              Ingresar
            </Link>
          </span>
        </p>
      </section>
      <footer>
        <hr />
      </footer>
    </Fragment>
  );
};

export default PhoneTemplateSignUp;
