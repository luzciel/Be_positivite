import React from 'react';
import PhoneTemplateSignUp from '../components/PhoneTemplateSignUp';
import TemplateSignUp from '../components/TemplateSignUp';
import WelcomeBox from '../components/WelcomeBox';

const SignUp = () => {
  return (
    <div>
    <section className="container-signUp">
      <div className="container-welcome">
        <WelcomeBox />
      </div>
     <div className="container-signIn-form">
        <TemplateSignUp />
      </div>
      </section>
      <section className="container-phone-signUp">
        <PhoneTemplateSignUp />
      </section>

    </div>
  );
};

export default SignUp;