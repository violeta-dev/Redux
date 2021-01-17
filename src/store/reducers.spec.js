import { AUTH_LOGIN} from './types';
import { auth } from './reducers';
//test reducer
describe('auth', () => {
    test('should handle a AUTH_LOGIN action', () => {
        const state = {isLogged:false}

            
        const action = {
            type: AUTH_LOGIN,
            payload: {
                isLogged: true,
              },
              
          };
          const expectedState = true
            
          
          expect(auth(state, action)).toEqual(expectedState);
        });
        
        });
        