import * as types from './types';

const initialState = {
  auth: null,
  adverts: null,
}
console.log(initialState)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      // login
      //Generamos el nuevo estado de auth
      return { ...state, auth: action.payload.isLogged };
    case types.AUTH_LOGOUT:
      // logout
      return { ...state, auth: null };
    default:
      return state;
  }
};

export default reducer;
