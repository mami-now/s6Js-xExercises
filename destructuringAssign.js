/*
Assign object property values to new variables while destructuring 🔗
for simple objects 
use a colon after the property name, like so propertyName: newName
assign a new name and give it a default value using = <default value>
for function parameter names 
do it the same way, with a colon behind it
giving it a default value is possible too, like above
*/

/*Assign object property values to new variables while destructuring
for simple objects
use a colon after the property name, like so `propertyName: newName`‣
const {x:y} = {x: 1};
assert.equal(y, 1);
assign a new name and give it a default value using `= <default value>`‣
const {x: y=42} = {y: 23};
assert.equal(y, 42);
for function parameter names
do it the same way, with a colon behind it‣
const fn = ({x:y}) => {
  assert.equal(y, 1);
};
fn({x: 1});
giving it a default value is possible too, like above‣
const fn = ({x: y=3}) => {
  assert.equal(y, 3);
};
fn({});   */
// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

//https://jskatas.org/katas/es6/language/destructuring/rename/


describe('Assign object property values to new variables while destructuring', () => {
  describe('for simple objects', function() {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      const {x:y} = {x: 1};
      assert.equal(y, 1);
    });
    it('assign a new name and give it a default value using `= <default value>`', () => {
      const {x: y=42} = {y: 23};
      assert.equal(y, 42);
    });
  });
  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      const fn = ({x:y}) => {
        assert.equal(y, 1);
      };
      fn({x: 1});
    });
    it('giving it a default value is possible too, like above', () => {
      const fn = ({x: y=3}) => {
        assert.equal(y, 3);
      };
      fn({});
    });
  });
});