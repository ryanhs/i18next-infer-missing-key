import { i18nextInferContext } from '../../src';

describe('context', () => {
  it.each([['male'], ['female']])('test at end: %s', async (g: string) => {
    const baseKey = 'Hi Welcome';
    const result = i18nextInferContext({
      key: baseKey,
      context: g,
    });

    const key = `${baseKey}_${g}`;
    expect(result).toBe(key);
  });
});
