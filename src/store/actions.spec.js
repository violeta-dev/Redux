import { AUTH_LOGIN , ADVERTS_LOADED} from './types';
import { authLogin, advertsLoaded,loadAdverts } from './actions';
import * as advertsApi from '../api/adverts';

jest.mock('../api/adverts');

//tests síncronos
describe('authLogin', () => {
    test('should create an AUTH_LOGIN action with isLogged', () => {
      const isLogged = true;
      const expectedAction = {
        type: AUTH_LOGIN,
        payload: {
            isLogged,
          },
        

      };
      const action = authLogin(isLogged);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('advertsLoaded', () => {
    test('should create a AdVERTS_LOADED action with adverts', () => {
      const adverts = ['1', '2'];
      const expectedAction = {
        type: ADVERTS_LOADED,
        payload: {
            adverts,
          },
      };
      const action = advertsLoaded(adverts);
      expect(action).toEqual(expectedAction);
    });
  });

  //test asíncronos

  describe('loadAdverts', () => {
    test('should dispatch a ADVERTS_LOADED action', async () => {
      const adverts = 'adverts';
      const thunkAction = loadAdverts();
      const dispatch = jest.fn();
      advertsApi.getAdverts.mockResolvedValue(adverts);
      await thunkAction(dispatch);
  
      expect(advertsApi.getAdverts).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        type: ADVERTS_LOADED,
        payload: {adverts},
      });
    });
  });
  
  
  
