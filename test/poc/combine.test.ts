import i18next from 'i18next';

describe('poc', () => {
  const instance = i18next.createInstance();
  instance.init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          // count only
          'x seat_zero': 'zero seat',
          'x seat_one': 'one seat',
          'x seat_other': 'other seat',

          // context with count
          'x seat_pirate_zero': 'zero pirate seat',
          'x seat_pirate_one': 'one pirate seat',
          'x seat_pirate_other': 'other pirate seat',
        },
      },
    },
  });

  describe('count', () => {
    it('zero', () =>
      expect(instance.t(`x seat`, { count: 0 })).toBe(`zero seat`));

    it('one', () =>
      expect(instance.t(`x seat`, { count: 1 })).toBe(`one seat`));

    it('other', () =>
      expect(instance.t(`x seat`, { count: 5 })).toBe(`other seat`));
  });

  describe('count with context', () => {
    it('zero', () =>
      expect(instance.t(`x seat`, { context: 'pirate', count: 0 })).toBe(
        `zero pirate seat`
      ));

    it('one', () =>
      expect(instance.t(`x seat`, { context: 'pirate', count: 1 })).toBe(
        `one pirate seat`
      ));

    it('other', () =>
      expect(instance.t(`x seat`, { context: 'pirate', count: 5 })).toBe(
        `other pirate seat`
      ));
  });
});
