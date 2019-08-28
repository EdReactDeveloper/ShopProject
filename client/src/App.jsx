import React, { useEffect } from 'react';
import './App.scss';
import { IntlProvider } from 'react-intl';
import './components/ui/icon/Icon.scss';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes/index';
import { getUser } from './store/actions/auth';
import messagesRu from './translations/rus.json';
import messagesEn from './translations/eng.json';

const messages = {
  ru: messagesRu,
  en: messagesEn
};
const language = navigator.language.split(/[-_]/)[0];
const App = () =>{
  useEffect(() => {
    store.dispatch(getUser());
  }, []);
  return (
    <div className="App">
      <IntlProvider locale={language} messages={messages[language]}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </IntlProvider>
    </div>
  );
}

export default App;
