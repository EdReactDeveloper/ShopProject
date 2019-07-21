import React, {useEffect} from 'react';
import './App.scss';
import './components/ui/icon/Icon.scss'; 
import {Provider} from 'react-redux'; 
import store from './store';
import Routes from './routes/index'; 
import {getUser } from './actions/auth'

function App() {
  useEffect(()=>{
    store.dispatch(getUser())
  }, [])
  return (
    <div className="App">
      <Provider store={store} >
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
