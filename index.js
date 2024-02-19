const { Person } = require('./person');

require('./modules/path');

const user = new Person("Hiago");

console.log(user.sayMyName())