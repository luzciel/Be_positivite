import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import FormSignIn from './FormSignIn';
import ModalSelectAccount from './ModalSelectAccount';

const PhoneTemplateSignIn = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    console.log(openModal);
    setOpenModal(!openModal);
  };

  return (
    <Fragment>
      <section>
        <FormSignIn />
      </section>
      <section className="container-networks">
        <button className="btn" onClick={() => handleModal()}>
          {' '}
          Iniciar sesión con otra cuenta
        </button>
      </section>
      <section className="container-new-user">
        <p className="new-user">
          ¿Eres un nuevo usuario?{' '}
          <span>
            <Link to="/SignUp">Crear una cuenta</Link>
          </span>
        </p>
      </section>
      <ModalSelectAccount open={openModal} handleModal={handleModal} />
    </Fragment>
  );
};

export default PhoneTemplateSignIn;
