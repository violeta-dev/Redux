import * as types from './types';

/*const initialState = {
  auth: null,
  adverts: null,
};


  export const auth = (state = initialState.auth, action) => {
   switch (action.type) {
    case types.AUTH_LOGIN:
      // login
      //return { ...state, auth: action.payload.loggedUserId };
      console.log(action.payload.loggedUserId)
      return action.payload.loggedUserId;
    case types.AUTH_LOGOUT:
      // logout
      //return { ...state, auth: null };
      return null;
    default:
      return state;
   }
  };
 export const adverts = (state = initialState.adverts, action) => {
  switch (action.type) {
    case types.ADVERTS_LOADED:
      //return { ...state, adverts: action.payload.adverts };
      return action.payload.adverts;
    case types.ADVERTS_CREATED:
      if (!state) {
        return [action.payload.advert];

       }
      
       return [...state, action.payload.advert]
  
    default:
      return state;
  }
};
/*const reducer = (state = initialState, action) => {
  return {
    auth: auth(state.auth, action),
    adverts: adverts(state.adverts, action),
  };
};
*/

const reducer = (state, action) => state;

export default reducer;
