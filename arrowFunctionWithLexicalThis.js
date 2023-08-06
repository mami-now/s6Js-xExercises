/*Arrow functions have lexical this, no dynamic this 
bound at definition time, use =>
can NOT bind a different context
arguments does NOT work inside arrow functions  */

/*Arrow functions have lexical `this`, no dynamic `this`
bound at definition time, use `=>`‣
var bound = new LexicallyBound();
var fn = bound.getFunction();
assert.strictEqual(fn(), bound);
can NOT bind a different context‣
var bound = new LexicallyBound();
var fn = bound.getFunction();
var anotherObj = {};
var expected = fn.call(anotherObj);
assert.strictEqual(fn.call(anotherObj), expected);
`arguments` does NOT work inside arrow functions‣
var bound = new LexicallyBound();
var fn = bound.getArgumentsFunction();
assert.equal(fn(1, 2).length, 0);  */

// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

//https://jskatas.org/katas/es6/language/arrow-functions/binding/

class LexicallyBound {
  getFunction() {
    return () => {
      return this;
    }
  }
  getArgumentsFunction() {
    return ()=> {return arguments}
  }
}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    assert.strictEqual(fn(), bound);
  });
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var anotherObj = {};
    var expected = fn.call(anotherObj);
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  it('`arguments` does NOT work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    assert.equal(fn(1, 2).length, 0);
  });
});