import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormSignUp from './FormSignUp';
import IconsNetworks from './IconsNetworks';

const TemplateSignUp = () => {
  return (
    <Fragment>
      <div className="wapper-top">
        <section>
          <FormSignUp />
        </section>
        <section className="container-networks">
          <p className="netwoks-text">O registrarse con otra cuenta</p>
          <IconsNetworks />
        </section>
      </div>
      <section className="container-enterokay">
        <p>
          ¿Ya eres usuario?{' '}
          <span>
            <Link to="/">Ingresar</Link>
          </span>
        </p>
      </section>
    </Fragment>
  );
};

export default TemplateSignUp;
