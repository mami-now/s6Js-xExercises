/**  Destructure objects 
by surrounding the left-hand variable with {}
nested 
multiple objects
object and array
array and object
interesting 
missing refs become undefined
destructure from builtins (string)
 */

/*
Destructure objects
by surrounding the left-hand variable with `{}`‣
const {x} = {x: 1};
assert.equal(x, 1);
nested
multiple objects‣
const magic = {first: 23, second: 42};
const {second} = magic;
assert.equal(second, 42);
object and array‣
const {z:[ ,x]} = {z: [23, 42]};
assert.equal(x, 42);
array and object‣
const[,[{lang}]]= [null, [{env: 'browser', lang: 'ES6'}]];
assert.equal(lang, 'ES6');
interesting
missing refs become undefined‣
const {z} = {x: 1, y: 2};
assert.equal(z, void 0);
destructure from builtins (string)‣
const {substr} = String();
assert.equal(substr, String.prototype.substr);
 */

/*

*/

// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const {x} = {x: 1};
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {second} = magic;
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z:[ ,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const[,[{lang}]]= [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2};
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      const {substr} = String();
      assert.equal(substr, String.prototype.substr);
    });
  });
});
