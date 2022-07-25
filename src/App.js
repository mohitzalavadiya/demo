import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import configurestore from './redux/Store';
import {Provider} from 'react-redux'

function App() {
  const store = configurestore()
  return (
    <Provider store={store}>
    <Counter/>
    </Provider>
  
  );
}

export default App;
