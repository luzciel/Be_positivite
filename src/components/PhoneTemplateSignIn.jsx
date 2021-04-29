import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FormSignIn from './FormSignIn';
import LogoBePositive from './LogoBePositive';
import IconBack from '../assets/img/Icon-back.svg'


const PhoneTemplateSignIn = (props) => {


  return (
    <Fragment>
      <section className="container-signIn-logo">
        <Link to="/" className="icon-back">
        <img src={IconBack} className="icon-back"  alt="icon-back"/>
        </Link>
      <LogoBePositive />
      </section>
      <section className="container-signIn-form">
         <h5 className="title">Inicie sesión para utilizar la aplicación</h5>
        <FormSignIn />
      </section>
      <section className="container-networks">
        <button className="btn btn-open-networks" onClick={() => props.handleModal()}>
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
      <footer>
        <hr />
      </footer>
      {/* <ModalSelectAccount open={openModal} handleModal={handleModal} /> */}
    </Fragment>
  );
};

export default PhoneTemplateSignIn;
