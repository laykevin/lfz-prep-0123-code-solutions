const person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Jerk';
console.log("The person's current job is:", person.job);
person.previousJob = 'amigo';
console.log("The person's previous job is:", person.previousJob);
console.log(person);
