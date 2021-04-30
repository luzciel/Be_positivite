import React  from 'react';
import TemplateSignIn from '../components/TemplateSignIn';
import WelcomeBox from '../components/WelcomeBox';
import PhoneWelcome from '../components/PhoneWelcome';

// import Home from '../components/home/Home.jsx';

const Home = (props) => {
  return (
    <div className="home">
      <section className="container-home-desktop">
        <div className="container-welcome">
          <WelcomeBox />
        </div>
        <div className="container-signIn wrapper-box">
          <TemplateSignIn />
        </div>
      </section>
      <section className="container-phone container-home-phone">
        <PhoneWelcome handleModal={props.handleModal} />
      </section>
    </div>
  );
};

export default Home;
