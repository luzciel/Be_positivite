import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  //NavLink
} from 'react-router-dom';
import ModalSelectAccount from './components/ModalSelectAccount';
import './styles/app.scss';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home handleModal={handleModal} />
          </Route>
          <Route path="/SignIn/">
            <SignIn handleModal={handleModal} />
          </Route>
          <Route path="/SignUp">
            <SignUp handleModal={handleModal} />
          </Route>
        </Switch>
      </div>
      <ModalSelectAccount open={openModal} handleModal={handleModal} />
    </Router>
  );
}

export default App;
