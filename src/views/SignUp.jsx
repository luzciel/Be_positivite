import React from 'react';
import PhoneTemplateSignUp from '../components/PhoneTemplateSignUp';
import TemplateSignUp from '../components/TemplateSignUp';
import WelcomeBox from '../components/WelcomeBox';

const SignUp = (props) => {
  return (
    <div className="signUp">
      <section className="container-signUp">
        <div className="container-welcome">
          <WelcomeBox />
        </div>
        <div className="container-signUp-form wrapper-box">
          <TemplateSignUp />
        </div>
      </section>
      <section className="container-phone container-phone-signUp">
        <PhoneTemplateSignUp handleModal={props.handleModal} />
      </section>
    </div>
  );
};

export default SignUp;
