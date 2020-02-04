//REACT ITSELF
import React from 'react';
//COMPONENTS
import Search from './components/Search';
import HeroesList from './components/Heroes';
//REDUX STUFF
import { Provider } from 'react-redux';
import store from './redux/store';
//REACT-ROUTER STUFF
import { Switch, Route } from 'react-router-dom';
//CSS AND STYLING STUFF
import bgImage from './assets/images/bg.png';
import './styles/fonts.css';

function App() {
  return (
    <div style={appStyleBg}>
      <Provider store={store}>
        <Switch>
          <Route exact path='/'>
            <Search></Search>
          </Route>
          <Route exact path='/heroes'>
            <HeroesList></HeroesList>
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

const appStyleBg = {
  backgroundImage: `url(${bgImage})`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  minHeight: '100vh'
};

export default App;
