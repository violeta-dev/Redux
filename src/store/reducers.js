import * as types from './types';

const initialState = {
  auth: false,
  adverts: null,
  tags: null,
  advert:null,
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
    case types.ADVERT_LOADED:
      return action.payload.advert;
    case types.ADVERT_DELETED:
      return action.payload.advertId;
    case types.ADVERTS_TAGS:
      return action.payload.tags;  
    case types.ADVERTS_CREATED:
      if (!state) {
        return [action.payload.advert];
      }
      return [...state, action.payload.advert];
    
    default:
      return state;
  }
};


