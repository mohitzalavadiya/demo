import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Rootreducer from './reducer';

const configurestore = () => {
    const store = createStore(Rootreducer, applyMiddleware(thunk));

    return store
}
      0
export default configurestore;