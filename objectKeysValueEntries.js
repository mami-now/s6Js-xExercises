const person={
  name:'john',
  age:30,
  gender:'male',
  city:'kigali'
}
// const NewPerson= Object.keys(person)
// const NewPerson= Object.values(person)
const NewPerson= Object.entries(person)
console.log(NewPerson);
/** [Running] node "c:\Users\user\Desktop\brad's project\S6JSlearning\objectKeys.js" /by using object.keys(the keys only will be the
 * one to be returned in form of array)
[ 'name', 'age', 'gender', 'city' ]

[Done] exited with code=0 in 0.302 seconds

[Running] node "c:\Users\user\Desktop\brad's project\S6JSlearning\objectKeys.js" this value returned by using object.value
(actually object.values return an array of values)
[ 'john', 30, 'male', 'kigali' ]

[Done] exited with code=0 in 0.119 seconds

[Running] node "c:\Users\user\Desktop\brad's project\S6JSlearning\objectKeys.js"/ny usimg objects .ebtries, it 'll return the array
of both key and values
[
  [ 'name', 'john' ],
  [ 'age', 30 ],
  [ 'gender', 'male' ],
  [ 'city', 'kigali' ]
]

[Done] exited with code=0 in 0.172 seconds */