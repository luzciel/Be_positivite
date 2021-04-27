import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormSignUp from './FormSignUp';
import LogoBePositive from './LogoBePositive';

const PhoneTemplateSignUp = () => {
  return (
      <Fragment>
          <LogoBePositive />
      <section>
        <FormSignUp />
      </section>
      <section className="container-networks">
        <button className="btn">registrarse con otra cuenta</button>
      </section>
      <section className="container-enterokay">
        <p>
          ¿Ya eres usuario?{' '}
          <span>
            <Link to="/">Ingresar</Link>
          </span>
        </p>
          </section>
          <footer>
              <hr/>
        </footer>
    </Fragment>
  );
};

export default PhoneTemplateSignUp;
