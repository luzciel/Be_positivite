import React, { Fragment } from 'react';
import EmailUsername from './EmailUsername';
import Password from './Password';

const FormSignIn = () => {
  return (
    <Fragment>
      <form id="SignInForm">
        <EmailUsername />
        <Password />
        <div className="container-forgot-password">
          <p className="forgot-password">¿Olvidaste tu contraseña?</p>
        </div>
        <button id="btnSignIn" className="btn btn-primary-desktop btn-sign-in">
          Iniciar Sesión
        </button>
      </form>
    </Fragment>
  );
};

export default FormSignIn;
