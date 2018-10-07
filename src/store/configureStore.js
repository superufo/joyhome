import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer from '../reducers/Index';

export default function configureStore(initialState) {
  return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
  );
}

