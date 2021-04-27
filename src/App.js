import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link,
  //NavLink
} from 'react-router-dom';
import './styles/app.scss';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/SignIn/"
           component={SignIn} />
          <Route path="/SignUp">
            <SignUp />
          </Route>

          {/* <Route path="/cardFavorites">
            <CardFavorites/>
          </Route>
  
          <Route path="/cardRecipes">
            <CardRecipes/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
