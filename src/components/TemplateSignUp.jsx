import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FormSignUp from './FormSignUp';
import IconsNetworks from './IconsNetworks';

const TemplateSignUp = () => {
  return (
    <Fragment>
      <div className="wapper-top">
        <div>
          <FormSignUp />
        </div>
        <div className="container-networks">
          <p className="netwoks-text">O registrarse con otra cuenta</p>
          <IconsNetworks />
        </div>
      </div>
      <div className="container-enterokay">
        <p>
          ¿Ya eres usuario?{' '}
          <span>
            <Link to="/">Ingresar</Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default TemplateSignUp;
