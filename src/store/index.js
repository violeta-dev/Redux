
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import * as reducers from './reducers';
import reducer from './reducers';


// Creamos nuestro store
//Le pasamos un preloadedState

export function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools()
  );
  return store;
}
