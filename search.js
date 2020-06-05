const yargs = require('yargs');
const data = require("./data.js");


const argv = yargs
  .command('ceo', 'Tells the ceo of spaceX ', {
    year: {
      description: 'the year to check for',
      alias: 'y',
      type: 'number',
    }
  })
  .option('time', {
    alias: 't',
    description: 'Tell the present Time',
    type: 'boolean',
  })
  .help()
  .alias('help', 'h')
  .argv;

if (argv.time) {
  console.log('The current time is: ', new Date().toLocaleTimeString());
}

if (argv._.includes('ceo')) {
  data.info()  
}


console.log(argv);
