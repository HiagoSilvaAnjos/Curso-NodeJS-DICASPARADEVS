const { Person } = require('./person');

require('./modules/path');
require('./modules/fs');

const user = new Person("Hiago");

console.log(user.sayMyName())