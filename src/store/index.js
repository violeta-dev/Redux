
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';
import thunk from 'redux-thunk'



// Creamos nuestro store
//Le pasamos un preloadedState y el combine Reducer
const reducer = combineReducers(reducers);
export function configureStore(preloadedState) {
  const middlewares = [thunk];
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
