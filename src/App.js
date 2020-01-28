//REACT ITSELF
import React, { useState } from 'react';
//COMPONENTS
import Search from './components/Search';
import HeroesList from './components/HeroesList';
//REDUX STUFF
import { Provider } from 'react-redux';
import store from './redux/store';
//REACT-ROUTER STUFF
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//CSS AND STYLING STUFF
import bgImage from './assets/images/bg.png';
import './styles/app.css';
import './styles/general.css';

function App() {
  return (
    <div style={appStyleBg}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Search}></Route>
            <Route exact path='/heroes' component={HeroesList}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

const appStyleBg = {
  backgroundImage: `url(${bgImage})`,
  backgroundAttachment: 'fixed',
  height: '100vh'
};

export default App;
