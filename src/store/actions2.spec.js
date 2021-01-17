import configureStore from 'redux-mock-store';

import { AUTH_LOGIN } from './types';

//test Mock Store

const middlewares = []
const mockStore = configureStore(middlewares)


const authLogin = (isLogged) => {
    return {
      type: AUTH_LOGIN,
      payload: {
        isLogged,
      },
    };
  };

  it('should dispatch action', () => {

    // Initialize mockstore with empty state
    const initialState = {}
    const store = mockStore(initialState)
  
    // Dispatch the action
    store.dispatch(authLogin())
  
    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const isLogged = undefined
    const expectedPayload = { type: AUTH_LOGIN, payload: {
        isLogged,
      }, }
    expect(actions).toEqual([expectedPayload])
  })