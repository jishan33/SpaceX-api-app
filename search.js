const yargs = require('yargs');
const data = require("./data.js");
const chalk = require('chalk');

const Table = require('cli-table');




const argv = yargs
  .command('ceo', 'Tells the ceo of spaceX ')
  .command('company', 'Tells the company of spaceX ')
  .command('links', 'Tells the links of spaceX ')
  .command('introduction', 'Tells the introduction of spaceX ')
  .command('events', 'Tells the historical events of spaceX')
  .command('rockets', 'Show all rockets')
  
  
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

if (argv._.includes('events')) {
  const detail = async () => {
    const events = await data.historicalEvents();
    let eventsTable = new Table({head: [ "Date", "Events"],
    style: {head: ['green']}});

    for (let event of events) {
      eventsTable.push( [event.event_date_utc, event.title])
      console.log(chalk.blue.bold(event.title))
      console.log(event.details)
      console.log("")
      console.log(chalk.green(`=`).repeat(100))
      console.log("")
    }

     console.log(eventsTable.toString());
  }
  detail();
}

if (argv._.includes('rockets')) {
  const detail = async () => {
    const rockets = await data.rockets();
    console.log(rockets)
  }
  detail();
}




let myArgs = process.argv.slice(2);
console.log(`> ` + myArgs + ` ?`);
