/*Spread syntax with arrays 
basically 
expands the items of an array by prefixing it with ...
an empty array expanded is no item
is (in a way) the opposite to the rest syntax 
both use ... to either expand all items and collect them
rest syntax must be last in an array, spread can be used in any place
used as function parameter 
prefix with ... to spread as function params
pass an array of numbers to Math.max()
used as constructor parameter 
just like in a function call (is not possible using apply)
Links
mdn docs Syntax docs on MDN.*/


/*
Spread syntax with arrays
basically
expands the items of an array by prefixing it with `...`‣
const middle = [1, 2, 3];
const arr = [0, ...middle, 4];
assert.deepEqual(arr, [0, 1, 2, 3, 4]);
an empty array expanded is no item‣
const arr = [0, 1];
assert.deepEqual(arr, [0, 1]);
is (in a way) the opposite to the rest syntax
both use `...` to either expand all items and collect them‣
const [...rest] = [...[1, 2, 3, 4, 5]];
assert.deepEqual(rest, [1, 2, 3, 4, 5]);
rest syntax must be last in an array, spread can be used in any place‣
const [a, b, ...rest] = [1, 2, 3, 4, 5];
assert.equal(a, 1);
assert.equal(b, 2);
assert.deepEqual(rest, [3, 4, 5]);
used as function parameter
prefix with `...` to spread as function params‣
const magicNumbers = [1, 2];
const fn = ([magicA, magicB]) => {
  assert.deepEqual(magicA, magicNumbers[0]);
  assert.deepEqual(magicB, magicNumbers[1]);
};
fn(magicNumbers);
pass an array of numbers to Math.max()‣
const max = Math.max(...[23, 0, 42]);
assert.equal(max, 42);
used as constructor parameter
just like in a function call (is not possible using `apply`)‣
class X {
  constructor(a, b, c) { return [a, b, c]; }
}
const args = [1,2,3];
assert.deepEqual(new X(...args), [1, 2, 3]);
*/

// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with arrays', () => {
  describe('basically', () => {
    it('expands the items of an array by prefixing it with `...`', function() {
      const middle = [1, 2, 3];
      const arr = [0, ...middle, 4];
      assert.deepEqual(arr, [0, 1, 2, 3, 4]);
    });
    it('an empty array expanded is no item', function() {
      const arr = [0, 1];
      assert.deepEqual(arr, [0, 1]);
    });
  });
  describe('is (in a way) the opposite to the rest syntax', function() {
    it('both use `...` to either expand all items and collect them', function() {
      const [...rest] = [...[1, 2, 3, 4, 5]];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    it('rest syntax must be last in an array, spread can be used in any place', function() {
      const [a, b, ...rest] = [1, 2, 3, 4, 5];
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.deepEqual(rest, [3, 4, 5]);
    });
  });
  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', function() {
      const magicNumbers = [1, 2];
      const fn = ([magicA, magicB]) => {
        assert.deepEqual(magicA, magicNumbers[0]);
        assert.deepEqual(magicB, magicNumbers[1]);
      };
      fn(magicNumbers);
    });
    it('pass an array of numbers to Math.max()', function() {
      const max = Math.max(...[23, 0, 42]);
      assert.equal(max, 42);
    });
  });  
  describe('used as constructor parameter', () => {
    it('just like in a function call (is not possible using `apply`)', () => {
      class X {
        constructor(a, b, c) { return [a, b, c]; }
      }
      const args = [1,2,3];
      assert.deepEqual(new X(...args), [1, 2, 3]);
    });
  });
});
