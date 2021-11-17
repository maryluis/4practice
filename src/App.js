import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { store } from './redux-saga';
import { Header, Main } from './components';

function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Header />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
