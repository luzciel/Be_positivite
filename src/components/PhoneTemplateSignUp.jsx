import React from 'react';
import { Link } from 'react-router-dom';

import FormSignUp from './FormSignUp';
import LogoBePositive from './LogoBePositive';
import IconBack from '../assets/img/Icon-back.svg';

const PhoneTemplateSignUp = (props) => {
  return (
    <div className="wrapper-signUp">
      <div className="container-signUp-logo">
        <div className="wrapper-top">
          <Link to="/SignIn" className="icon-back">
            <img src={IconBack} className="icon-back" alt="icon-back" />
          </Link>
          <div className="wrap-logo-positive">
            <LogoBePositive />
          </div>
        </div>
      </div>
      <div className="wrapper-contents">
        <div className="wrapper-body">
          <div className="container-signUp-form">
            <FormSignUp />
            <div className="container-networks">
              <button
                className="btn btn-open-networks"
                onClick={() => props.handleModal()}
              >
                Registrarse con otra cuenta
              </button>
            </div>
          </div>
          <div className="container-enterokay">
            <p className="enterokay-question">
              ¿Ya eres usuario?{' '}
              <span>
                <Link to="/" className="enterokay-link">
                  Ingresar
                </Link>
              </span>
            </p>
          </div>
        </div>
        <footer>
          <hr />
        </footer>
      </div>
    </div>
  );
};

export default PhoneTemplateSignUp;
