import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux-saga';
import { LoginPage } from './components';

function App() {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
}

export default App;
