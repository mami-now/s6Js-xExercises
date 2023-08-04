/*Tagged template strings, are an advanced form of template strings 
syntax: prefix a template string with a function to call (without "()" around it)
the tag function can access each part of the template 
the 1st parameter receives only the pure strings of the template string 
the strings are an array
expressions are NOT passed to it
the 2nd and following parameters contain the values of the processed substitution 
the 2nd parameter contains the first expression`s value
the 3rd parameter contains the second expression`s value
using ES6 rest syntax, all values can be accessed via one variable   */

//https://jskatas.org/katas/es6/language/template-strings/tagged/

/** Tagged template strings, are an advanced form of template strings
syntax: prefix a template string with a function to call (without "()" around it)‣
function tagFunction(s) {
  return s.toString();
}
var evaluated = tagFunction `template string`;
assert.equal(evaluated, 'template string');
the tag function can access each part of the template
the 1st parameter receives only the pure strings of the template string
the strings are an array‣
var result = ['template string'];
assert.deepEqual(result, tagFunction`template string`);
expressions are NOT passed to it‣
var tagged = tagFunction`one${''}two`;//{''}two; (this is the other way to create valiable)

assert.deepEqual(tagged, ['one', 'two']);
the 2nd and following parameters contain the values of the processed substitution
the 2nd parameter contains the first expression`s value‣
function firstValueOnly(strings, first_value) {
  return first_value;
}
assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
the 3rd parameter contains the second expression`s value‣
function secondValueOnly(strings, firstValue, ____) {
  return ____;
}
assert.equal(secondValueOnly`uno ${one}, dos ${two}`, 2);
using ES6 rest syntax, all values can be accessed via one variable‣
function allValues(stringsArray, ...allTheValues) { // using the new ES6 rest syntax
  return  allTheValues;
}
assert.deepEqual(allValues`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]); */

// 3: template strings - tagged
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Tagged template strings, are an advanced form of template strings', function() {
  it('syntax: prefix a template string with a function to call (without "()" around it)', function() {
    function tagFunction(s) {
      return s.toString();
    }
    var evaluated = tagFunction `template string`;
    assert.equal(evaluated, 'template string');
  });
  describe('the tag function can access each part of the template', function() {
    describe('the 1st parameter receives only the pure strings of the template string', function() {
      function tagFunction(strings) {
        return strings;
      }
      it('the strings are an array', function() {
        var result = ['template string'];
        assert.deepEqual(result, tagFunction`template string`);
      });
      it('expressions are NOT passed to it', function() {
        var tagged = tagFunction`one${''}two`;//{''}two; (this is the other way to create valiable)
        
        assert.deepEqual(tagged, ['one', 'two']);
      });
    });
    describe('the 2nd and following parameters contain the values of the processed substitution', function() {
      var one = 1;
      var two = 2;
      var three = 3;
      it('the 2nd parameter contains the first expression`s value', function() {
        function firstValueOnly(strings, first_value) {
          return first_value;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
      });
      it('the 3rd parameter contains the second expression`s value', function() {
        function secondValueOnly(strings, firstValue, ____) {
          return ____;
        }
        assert.equal(secondValueOnly`uno ${one}, dos ${two}`, 2);
      });
      it('using ES6 rest syntax, all values can be accessed via one variable', function() {
        function allValues(stringsArray, ...allTheValues) { // using the new ES6 rest syntax
          return  allTheValues;
        }
        assert.deepEqual(allValues`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]);
      });
    });
  });
});