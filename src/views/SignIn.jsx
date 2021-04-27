import React, {useState, useEffect}  from 'react';
// import ModalSelectAccount from '../components/ModalSelectAccount';
import TemplateSignIn from '../components/TemplateSignIn';
import WelcomeBox from '../components/WelcomeBox';
import PhoneTemplateSignIn from '../components/PhoneTemplateSignIn';


const SignIn = () => {
  const [registration, setRegistration] = useState('');

     useEffect(() => {
       const statusRegistration = new URLSearchParams(document.location.search).get('registration');
       setRegistration(statusRegistration);
     }, []);
  
  console.log(registration);
  

  const approvedRegistration = () => {
    if (registration) {
      return (
      <div className="container-approved-registration">
        <p>Felicidades te haz registrado exitosamente.</p>
      </div>

      )
    }
  }
  
  return (
    <div>
      <section className="container-home">
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
      <section className="container-home-phone">
        <PhoneTemplateSignIn />
        {/* <ModalSelectAccount /> */}
        {approvedRegistration()}
      </section>
      {/* {registration && (
        <div className="">
        <p>Felicidades te haz registrado exitosamente.</p>
    </div> 
      )} */}
    </div>
  );
};

export default SignIn;