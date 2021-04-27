import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormSignIn from './FormSignIn';
import IconsNetworks from './IconsNetworks';

const TemplateSignIn = () => {
  return (
    <Fragment>
      <section>
        <FormSignIn />
      </section>
      <section className="container-networks">
        <h5>O inicia sesión con otra cuenta</h5>
        <IconsNetworks />
      </section>
      <section className="container-new-user">
        <p className="new-user">
          ¿Eres un nuevo usuario?{' '}
          <span>
            <Link to="/SignUp">Crear una cuenta</Link>
          </span>
        </p>
      </section>
    </Fragment>
  );
};

export default TemplateSignIn;
