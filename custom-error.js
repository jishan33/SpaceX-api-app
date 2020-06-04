
const chalk = require('chalk');

class MyError extends Error {
  constructor(...args) {
        super(...args)
        this.name = "MyError";
    }
}

function test() {
  throw new MyError("Whoops!");
}   
   
// callback with a custom error object
let getError = (cb) => cb(new MyError(chalk.red('there was a problem')))

// get the error and log the stack trace
getError((err) => console.log(err))





module.exports = MyError;