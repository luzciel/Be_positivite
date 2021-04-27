import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import EmailUsername from './EmailUsername';
import Password from './Password';

const FormSignUp = () => {
  return (
    <Fragment>
      <h4>Registrarse en be positivite</h4>
      <EmailUsername />
      <div className="form-seccion">
        <p className="label">Nombre</p>
        <input type="text" className="form-control" placeholder="Ingresa nombre" required />
      </div>
      <Password />
      <label className="form-accept-conditions">
        <input type="checkbox" value="checkbox" />
        Aceptar términos y condiciones
      </label>
      <Link to="/SignIn/?registration=true">
      <button className="btn btn-primary-desktop btn-sign-up">Crear una cuenta</button>
      </Link>
    </Fragment>
  );
};

export default FormSignUp;
