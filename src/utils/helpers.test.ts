import { expect } from 'chai';
import { set } from './helpers';

describe('Helpers functions', () => {
  describe('set', () => {
    // arrange
    let obj: object;
    let path: string;
    let value: unknown;

    beforeEach(() => {
      obj = {};
      path = 'a.b.c';
      value = 3;
    });

    it('should return object if it is not an object', () => {
      // arrange
      const obj = 'set';

      // act
      const result = set(obj, 'test.test', value);

      // assert
      expect(result).to.eq(obj);
    });

    it('should return passed if null is passed as first argument', () => {
      // arrange
      const obj = null;

      // act
      const result = set(obj, 'test.test', value);

      // assert
      expect(result).to.eq(obj);
    });

    it('should throw an error if path is not a string', () => {
      // act
      const path = 3 as any;
      const fn = () => set(obj, path, value);

      // assert
      expect(fn).to.throw(Error);
    });

    it('should set new property to passed object with passed value', () => {
      // act
      const result = set(obj, path, value);
      // assert
      expect((result as any).a.b.c).to.eq(value);
    });

    it('should not return new object', () => {
      // act
      const result = set(obj, path, value);
      // assert
      expect(result).to.eq(obj);
    });
  });
});
