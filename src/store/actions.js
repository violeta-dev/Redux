
import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    ADVERTS_LOADED,
    ADVERTS_CREATED,
    ADVERTS_TAGS,
    ADVERT_DELETED,
    ADVERT_LOADED,
  } from './types';
  
import * as advertsApi from '../api/adverts';

export const loadAdverts = () => async (dispatch, getState) => {
  const adverts = await advertsApi.getAdverts();
  dispatch(advertsLoaded(adverts));
};

export const authLogin = (isLogged) => {
  return {
    type: AUTH_LOGIN,
    payload: {
      isLogged,
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
  
  export const advertCreated = (advert) => {
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

export const advertDeleted = advertId => {
  return {
    type: ADVERT_DELETED,
    payload: {
      advertId,
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