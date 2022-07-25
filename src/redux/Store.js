import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './reducer';

const configurestore = () => {
    let store = createStore(rootreducer, applyMiddleware(thunk))
    return store
} 
export default configurestore;