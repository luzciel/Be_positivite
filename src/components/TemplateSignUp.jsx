import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import FormSignUp from './FormSignUp';
import IconsNetworks from './IconsNetworks';

const TemplateSignUp = () => {
  return (
    <Fragment>
          <section>
              <FormSignUp />
        </section>
      <section className="container-networks">
        <p>O registrarse con otra cuenta</p>
        <IconsNetworks />
      </section>
      <section className="container-enterokay">
        <p>¿Ya eres usuario?{' '}
          <span>
            <Link  to="/">Ingresar</Link>
          </span>
        </p>
      </section>
    </Fragment>
  );
};

export default TemplateSignUp;
