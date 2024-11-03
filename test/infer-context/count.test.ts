import { i18nextInferContext } from '../../src';

describe('count', () => {
  it.each([['one'], ['two'], ['few'], ['many'], ['other']])(
    'test at end: %s',
    async (g: string) => {
      const baseKey = 'you have {{count}} seat';
      const result = i18nextInferContext({
        key: baseKey,
        countForm: g,
      });

      const key = `${baseKey}_${g}`;
      expect(result).toBe(key);
    }
  );
});
