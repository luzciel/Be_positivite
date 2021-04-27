import React  from 'react';
import ModalSelectAccount from '../components/ModalSelectAccount';
import TemplateSignIn from '../components/TemplateSignIn';
import WelcomeBox from '../components/WelcomeBox';
import PhoneWelcome from '../components/PhoneWelcome';

// import Home from '../components/home/Home.jsx';

const Home = () => {
  return (
    <div>
      {/* <div className="">
        <p>Felicidades te haz registrado exitosamente.</p>
      </div> */}
      <section className="container-home">
        <div className="container-welcome">
          <WelcomeBox />
        </div>
        <div className="container-signIn">
          <TemplateSignIn />
        </div>
      </section>
      <section className="container-home-phone">
        <PhoneWelcome />
        <ModalSelectAccount />
      </section>
    </div>
  );
};

export default Home;
