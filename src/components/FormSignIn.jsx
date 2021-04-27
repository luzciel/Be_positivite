import React, { Fragment } from 'react';
import EmailUsername from './EmailUsername';
import Password from './Password';

const FormSignIn = () => {
  return (
    <Fragment>
      <h4>Bienvenido</h4>
      <h5>Inicie sesión ingresando su cuenta aquí</h5>
      <EmailUsername />
      <Password />
      <div className="container-forgot-password">
        <p className="forgot-password">¿Olvidaste tu contraseña?</p>
      </div>
      <button className="btn btn-primary-desktop btn-sign-in">
        Iniciar Sesión
      </button>
    </Fragment>
  );
};

export default FormSignIn;
