/*Arrow functions 
are shorter to write, instead of function(){} write () => {}
instead {} use an expression, as return value
one parameter can be written without parens
many params require parens
the function body needs parens to return an object*/

// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    var func = () => {};
    assert.equal('' + func, '() => {}');
  });
  it('instead `{}` use an expression, as return value', function() {
    var func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });
  it('one parameter can be written without parens', () => {
    var func = param => param - 1;
    assert.equal(func(25), 24);
  });
  it('many params require parens', () => {
    var func = (param,param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });
  it('the function body needs parens to return an object', () => {
    var func = () =>({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });
});

//https://jskatas.org/katas/es6/language/arrow-functions/basics/

/*Arrow functions
are shorter to write, instead of `function(){}` write `() => {}`‣
var func = () => {};
assert.equal('' + func, '() => {}');
instead `{}` use an expression, as return value‣
var func = () => 'I return too';
assert.equal(func(), 'I return too');
one parameter can be written without parens‣
var func = param => param - 1;
assert.equal(func(25), 24);
many params require parens‣
var func = (param,param1) => param + param1;
assert.equal(func(23, 42), 23+42);
the function body needs parens to return an object‣
var func = () =>({iAm: 'an object'});
assert.deepEqual(func(), {iAm: 'an object'});*/