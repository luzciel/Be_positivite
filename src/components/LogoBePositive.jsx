import React from 'react';
import { Link } from 'react-router-dom';
import logoBePositive from '../assets/img/Logo-be-positive.svg';

const LogoBePositive = () => {
  return (
    <figure className="logo">
      <Link to="/">
        <img
          src={logoBePositive}
          className="logo-BePositive"
          alt="vector-happy"
        />
      </Link>
    </figure>
  );
};

export default LogoBePositive;
