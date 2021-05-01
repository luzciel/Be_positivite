import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import EmailUsername from './EmailUsername';
import Password from './Password';

const FormSignUp = () => {
  return (
    <Fragment>
      <h4 className="title">Registrarse en be positivite</h4>
      <EmailUsername />
      <div className="form-seccion">
        <p className="label">Nombre</p>
        <div className="wrapper-input form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Ingresa nombre"
            required
          />
        </div>
      </div>
      <Password />
      <div className="form-accept-conditions">
        <input type="checkbox" className="conditions-input" value="checkbox" />
        Aceptar términos y condiciones
      </div>
      <Link to="/SignIn/?registration=true">
        <button id="btnSignUp" className="btn btn-primary-desktop btn-sign-up">
          Crear una cuenta
        </button>
      </Link>
    </Fragment>
  );
};

export default FormSignUp;
