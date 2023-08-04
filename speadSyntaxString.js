/*Spread syntax with strings 
expands each character of a string by prefixing it with ...
expands any kind of character
works anywhere inside an array (must not be last)
don`t confuse with the rest operator
can also be used as function parameter
Links
mdn docs Syntax docs on MDN.  */

/*Spread syntax with strings
expands each character of a string by prefixing it with `...`‣
const [a,b] = [...'ab'];
assert.equal(a, 'a');
assert.equal(b, 'b');
expands any kind of character‣
const arr = [...'1 ☢ 2'];
assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
works anywhere inside an array (must not be last)‣
const letters = ['a', ...'bcd', 'e', 'f'];
assert.equal(letters.length, 6);
don`t confuse with the rest operator‣
const [...rest] = [...'12345'];
assert.deepEqual(rest, [1, 2, 3, 4, 5]);
can also be used as function parameter‣
const max = Math.max(...'12345');
assert.deepEqual(max, 5);  */

// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with strings', () => {
  it('expands each character of a string by prefixing it with `...`', function() {
    const [a,b] = [...'ab'];
    assert.equal(a, 'a');
    assert.equal(b, 'b');
  });
  it('expands any kind of character', function() {
    const arr = [...'1 ☢ 2'];
    assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
  });
  it('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', ...'bcd', 'e', 'f'];
    assert.equal(letters.length, 6);
  });
  it('don`t confuse with the rest operator', function() {
    const [...rest] = [...'12345'];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });
  it('can also be used as function parameter', function() {
    const max = Math.max(...'12345');
    assert.deepEqual(max, 5);
  });
});
