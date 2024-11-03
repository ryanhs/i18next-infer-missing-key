import { I18nextInfer, i18nextInferKey } from '../../src';

describe('device', () => {
  it.each([['mobile'], ['desktop'], ['ios'], ['android']])(
    'test at end: %s',
    (g: string) => {
      const baseKey = 'welcome message';
      const key = `${baseKey}_${g}`;
      const result = i18nextInferKey(key);

      expect(result).toEqual(
        expect.objectContaining<I18nextInfer>({
          key: baseKey,
          context: g,
        })
      );
    }
  );

  it.each([['mobile'], ['desktop'], ['ios'], ['android']])(
    'test at middle: %s',
    (g: string) => {
      const baseKey = 'welcome message';
      const key = `${baseKey}_${g}_one`;
      const result = i18nextInferKey(key);

      expect(result).toEqual(
        expect.objectContaining<I18nextInfer>({
          key: baseKey,
          context: g,
        })
      );
    }
  );
});
