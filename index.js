const readline = require('readline-sync');
const chalk = require('chalk');
const emoji = require('node-emoji');
const data = require("./data.js");
const boxen = require("boxen");
const Table = require('cli-table');

// simplify console log, CSS, emoji 
const { log } = console;
const rocket = emoji.get('rocket').repeat(3);
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "blue",
  backgroundColor: "#555555"
};


const main = async () => {
  // Greeting 
  log("Hi, What's your name?");
  let name = readline.question('>');
  const greeting = `${chalk.blueBright.bold(name)}, Welcome to ${rocket + chalk.cyanBright.bold("SpaceX Termainal App") + rocket}`
  const greetingBox = boxen(greeting, boxenOptions)

  log(greetingBox)


  // About us 
  log(chalk.blue(`<>`).repeat(25))
  log(`Here are some basic information about SpaceX: `)
  log(`Contact us through the links provided below ${emoji.get(`smile_cat`)}`)
  log(chalk.blue(`<>`).repeat(25))

  const detail = await data.info();
  log(detail);


  // Upcoming launches
  const upcomingLaunches = emoji.get('fireworks') + chalk.white.bold(`In 2020, join us for these exciting upcoming launches`) + emoji.get('fireworks')
  const launchesBox = boxen(upcomingLaunches, boxenOptions)
  log(launchesBox)

  await data.launches();

  // Search feature
  const commands = emoji.get("white_check_mark") + chalk.cyan.bold(` Search Engine:`) +chalk.white(` Try the command lines below to see the results `)

  log(commands)

  // Commands table
  let table = new Table({head: ["", "Search Commands"]});

  table.push(
    { 'Company': ['$ node search.js company'] }, { 'SpaceX CEO': ['$ node search.js ceo'] },
    { 'Links': ['$ node search.js links'] },
    { 'Introduction': ['$ node search.js introduction'] }
  );
  const tableBox = boxen(table.toString(), boxenOptions)
  console.log(tableBox);

}


main();












