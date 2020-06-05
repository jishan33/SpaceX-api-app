const yargs = require('yargs');
const data = require("./data.js");



const argv = yargs
  .command('ceo', 'Tells the ceo of spaceX ')
  .command('company', 'Tells the ceo of spaceX ')
  .command('links', 'Tells the ceo of spaceX ')
  .command('introduction', 'Tells the ceo of spaceX ')
  
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
  const detail = async () => {
    const info1 = await data.info();
    console.log(info1.ceo)
  }
  detail();
}

if (argv._.includes('company')) {
  const detail = async () => {
    const info1 = await data.info();
    console.log(info1.name)
  }
  detail();
}

if (argv._.includes('links')) {
  const detail = async () => {
    const info1 = await data.info();
    console.log(info1.links)
  }
  detail();
}

if (argv._.includes('introduction')) {
  const detail = async () => {
    const info1 = await data.info();
    console.log(info1.summary)
  }
  detail();
}




console.log(argv);
