import React, { useState, useEffect } from 'react';
import TemplateSignIn from '../components/TemplateSignIn';
import WelcomeBox from '../components/WelcomeBox';
import PhoneTemplateSignIn from '../components/PhoneTemplateSignIn';

const SignIn = (props) => {
  const [registration, setRegistration] = useState('');

  useEffect(() => {
    const statusRegistration = new URLSearchParams(
      document.location.search
    ).get('registration');
    setRegistration(statusRegistration);
  }, []);

  const approvedRegistration = () => {
    if (registration) {
      return (
        <div className="container-approved-registration">
          <p>Felicidades te haz registrado <br/> exitosamente.</p>
        </div>
      );
    }
  };

  return (
    <div>
      <section className="container-home-desktop">
        {approvedRegistration()}
        <div>
          <div className="container-welcome">
            <WelcomeBox />
          </div>
          <div className="container-signIn">
            <TemplateSignIn />
          </div>
        </div>
      </section>
      <section className="container-phone container-signIn-phone">
        <PhoneTemplateSignIn handleModal={props.handleModal} />
        {approvedRegistration()}
      </section>
    </div>
  );
};

export default SignIn;
