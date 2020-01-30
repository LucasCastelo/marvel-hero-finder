//REACT ITSELF
import React from 'react';
//COMPONENTS
import Search from './components/Search';
//REDUX STUFF
import { Provider } from 'react-redux';
import store from './redux/store';
//REACT-ROUTER STUFF
import { Switch, Route } from 'react-router-dom';
//CSS AND STYLING STUFF
import bgImage from './assets/images/bg.png';
import './styles/index.css';

function App() {
  return (
    <div style={appStyleBg}>
      <Provider store={store}>
        <Switch>
          <Route exact path='/'>
            <Search></Search>
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

const appStyleBg = {
  backgroundImage: `url(${bgImage})`,
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  position: 'absolute',
  width: '100%',
  top: '0',
  left: '0'
};

export default App;
