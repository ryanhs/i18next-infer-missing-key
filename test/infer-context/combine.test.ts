import { i18nextInferContext } from '../../src';

describe('combine', () => {
  it.each([
    ['male', 'one'],
    ['male', 'two'],
    ['female', 'one'],
    ['female', 'two'],
  ])('test at end: %s %s', async (ctx: string, ctf: string) => {
    const baseKey = 'you have {{count}} seat';
    const result = i18nextInferContext({
      key: baseKey,
      context: ctx,
      countForm: ctf,
    });

    // _context_count
    const key = `${baseKey}_${ctx}_${ctf}`;
    expect(result).toBe(key);
  });
});
