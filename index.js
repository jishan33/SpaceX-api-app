const readline = require('readline-sync');
const fetch = require("node-fetch");
const chalk = require('chalk');
const emoji = require('node-emoji');
const _ = require("lodash");
const data = require("./data.js");

const {log} = console;
const rocket = emoji.get('rocket');


const main = async () => {
  // Greeting 
  log("Hi, What's your name?");
  let name = readline.question('>');
  log(`${chalk.blue(name)}, Welcome to ${rocket.repeat(3) + chalk.blue("SpaceX Termainal App") + rocket.repeat(3)}`);

  // About us 
  log(chalk.blue(`<>`).repeat(25))
  log(`Here are some basic information about SpaceX: `)
  log(`Contact us through the links provided below ${emoji.get(`smile_cat`)}`)
  log(chalk.blue(`<>`).repeat(25))

  await data.info();

  // Upcoming launchs
  log(emoji.get('fireworks') + chalk.white.bgMagentaBright.bold(`In 2020, We have more launchs coming, join us for these exciting upcoming launches`) + emoji.get('fireworks'))

  await data.launches();
}


main();













