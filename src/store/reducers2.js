import * as types from './types';

export const initialState = {
  auth: null,
  adverts:null,

}
console.log(initialState)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      // login
      //Generamos el nuevo estado de auth
      console.log(action.payload)
      return { ...state, auth: action.payload.isLogged };
    case types.AUTH_LOGOUT:
      // logout
      return { ...state, auth: action.payload.isLogged };
    case types.ADVERTS_LOADED:
        return { ...state, adverts: action.payload.adverts };
                   
    case types.ADVERTS_CREATED:
        if (!state.adverts) {
          return { ...state, adverts: [action.payload.advert] };
        }
        return { ...state, adverts: state.adverts.concat(action.payload.advert) };
    default:
      return state;
  }
};

export default reducer;
