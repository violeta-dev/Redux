import { getLatestTags } from './selectors';


describe('selector', () => {
    test('should return Tags available', () => {
      const state = {
        tags:  ['work', 'lifelstyle','motor','mobile'],
          
      };
      expect(getLatestTags(state)).toEqual(['work', 'lifelstyle','motor','mobile']);
    });
  });