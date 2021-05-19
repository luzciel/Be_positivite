import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import EmailUsername from './EmailUsername';
import Password from './Password';

const FormSignUp = () => {
  let history = useHistory();

  const registration = () => {
    history.push('/SignIn/?registration=true');
  };

  return (
    <Fragment>
      <h4 className="title">Registrarse en be positivite</h4>
      <form id="SignUpForm" onSubmit={() => registration()}>
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
          <input
            type="checkbox"
            className="conditions-input"
            value="checkbox"
            required
          />
          Aceptar términos y condiciones
        </div>
        <button
          type="submit"
          id="btnSignUp"
          className="btn btn-primary-desktop btn-sign-up"
        >
          Crear una cuenta
        </button>
      </form>
    </Fragment>
  );
};

export default FormSignUp;
