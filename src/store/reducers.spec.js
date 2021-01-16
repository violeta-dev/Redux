import { ADVERTS_TAGS } from './types';
import { tags } from './reducers';

describe('tags', () => {
    test('should handle a ADVERTS_TAGS action', () => {
        const state = []
            
        const action = {
            type: ADVERTS_TAGS,
            payload: ["work","lifestyle","mobile", "motor"]
              
          };
          const expectedState = [
            { id: '1', likes: ['like'] },
            { id: '2', likes: [] },
          ];
          expect(tags(state, action)).toEqual(expectedState);
        });
        test('should handle ANY action', () => {
            const state = [];
            const action = {
              type: 'ANY',
            };
            expect(tags(state, action)).toEqual(state);
          });
        });
        