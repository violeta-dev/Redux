import * as types from './types';

const initialState = {
  auth: null,
  adverts: null,
};


export const auth = (state = initialState.auth, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      // login
      return action.payload.isLogged;
    case types.AUTH_LOGOUT:
      // logout
      return action.payload.isLogged;
    default:
      return state;
  }
};

export const adverts = (state = initialState.adverts, action) => {
  switch (action.type) {
    case types.ADVERTS_LOADED:
      return action.payload.adverts;
    case types.ADVERT_DELETED:
      return action.payload.advert;
    case types.ADVERTS_CREATED:
      if (!state) {
        return [action.payload.advert];
      }
      return [...state, action.payload.advert];
    
    default:
      return state;
  }
};


