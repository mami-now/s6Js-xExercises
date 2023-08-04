
/*When destructuring you can also provide default values 
just assign a default value, like so a=1
for a missing value
in an object
if the value is undefined
also a string works with defaults  */

/*When destructuring you can also provide default values
just assign a default value, like so `a=1`‣
const [a=1] = [];
assert.equal(a, 1);
for a missing value‣
const [b=2] = [,1,,3];
assert.equal(b, 2);
in an object‣
const {a, b=2} = {a: 1};
assert.equal(b, 2);
if the value is undefined‣
const {a, b=2} = {a: 1, b: void 0};
assert.strictEqual(b, 2);
also a string works with defaults‣
const [a,b=2] = '1';
assert.equal(a, '1');
assert.equal(b, 2);  */

// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
  it('just assign a default value, like so `a=1`', () => {
    const [a=1] = [];
    assert.equal(a, 1);
  });
  it('for a missing value', () => {
    const [b=2] = [,1,,3];
    assert.equal(b, 2);
  });
  it('in an object', () => {
    const {a, b=2} = {a: 1};
    assert.equal(b, 2);
  });
  it('if the value is undefined', () => {
    const {a, b=2} = {a: 1, b: void 0};
    assert.strictEqual(b, 2);
  });
  it('also a string works with defaults', () => {
    const [a,b=2] = '1';
    assert.equal(a, '1');
    assert.equal(b, 2);
  });
});
