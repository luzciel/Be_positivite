import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormSignIn from './FormSignIn';
import IconsNetworks from './IconsNetworks';

const TemplateSignIn = () => {
  return (
    <Fragment>
      <div className="wapper-top">
        <div>
          <h4>Bienvenido</h4>
          <h5 className="title">Inicie sesión ingresando su cuenta aquí</h5>
          <FormSignIn />
        </div>
        <div className="container-networks">
          <p className="netwoks-text">O inicia sesión con otra cuenta</p>
          <IconsNetworks />
        </div>
      </div>
      <div className="container-new-user">
        <p className="new-user">
          ¿Eres un nuevo usuario?{' '}
          <span>
            <Link to="/SignUp">Crear una cuenta</Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default TemplateSignIn;
