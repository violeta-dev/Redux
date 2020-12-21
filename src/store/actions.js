
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ADVERTS_LOADED,
    ADVERTS_CREATED,
    ADVERTS_TAGS,
    ADVERT_DELETED,
    ADVERT_LOADED,
  } from './types';
  

export const authLogin = (isLogged, token) => {
  return {
    type: AUTH_LOGIN,
    payload: {
      isLogged,
      token,
    },
  };
};

export const authLogout = (isLogged) => {
  return {
    type: AUTH_LOGOUT,
    payload: {
      isLogged,
    },
  };
};

export const advertsLoaded = adverts => {
    return {
      type: ADVERTS_LOADED,
      payload: {
        adverts,
      },
    };
  };
  
  export const advertCreated = advert => {
    return {
      type: ADVERTS_CREATED,
      payload: {
        advert,
      },
    };
  };
  


export const advertsTags = tags => {
  return {
    type: ADVERTS_TAGS,
    payload: {
      tags,
    },
  };
};

export const advertDeleted = advert => {
  return {
    type: ADVERT_DELETED,
    payload: {
      advert,
    },
  };
};

export const advertLoaded = advert => {
  return {
    type: ADVERT_LOADED,
    payload: {
      advert,
    },
  };
};