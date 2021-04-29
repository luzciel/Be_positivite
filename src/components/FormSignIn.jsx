import React, { Fragment } from 'react';
import EmailUsername from './EmailUsername';
import Password from './Password';

const FormSignIn = () => {
  return (
    <Fragment>
      <EmailUsername />
      <Password />
      <div className="container-forgot-password">
        <p className="forgot-password">¿Olvidaste tu contraseña?</p>
      </div>
      <button id="btnSignIn" className="btn btn-primary-desktop btn-sign-in">
        Iniciar Sesión
      </button>
    </Fragment>
  );
};

export default FormSignIn;
