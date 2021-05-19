import React, { Fragment } from 'react';
import logoBePositive from '../assets/img/Logo-be-positive.svg';
import vectorHappy from '../assets/img/Vector-happy.svg';

const WelcomeBox = () => {
  return (
    <Fragment>
      <figure className="logo">
        <img
          src={logoBePositive}
          className="logo-BePositive"
          alt="vector-happy"
        />
      </figure>
      <div className="welcome-text">
        <figure className="vector-happy">
          <h2>
            Gestiona tus seguidores <br /> de forma segura
          </h2>
          <img src={vectorHappy} alt="vector-happy" />
        </figure>
      </div>
    </Fragment>
  );
};

export default WelcomeBox;
