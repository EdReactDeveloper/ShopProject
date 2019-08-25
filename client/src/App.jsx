import React, { useEffect } from 'react';
import './App.scss';
import './components/ui/icon/Icon.scss';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes/index';
import { getUser } from './store/actions/auth';
import { IntlProvider } from 'react-intl';
import messages_ru from './translations/rus.json';
import messages_en from './translations/eng.json';

const messages = {
  ru: messages_ru,
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0];
function App() {
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
