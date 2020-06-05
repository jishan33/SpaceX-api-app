const fetch = require("node-fetch")
const chalk = require('chalk');
const emoji = require('node-emoji');
const CustomError = require("./custom-error")
const fs = require("fs");


const errMessage = chalk.yellowBright(`error is in data section `) + emoji.get('cry')


const capsules = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/capsules')
    const data = await response.json()

    for (item of data) {
      console.log(item.capsule_id)
    }
  } catch (error) {
    throw new CustomError(errMessage)
  }
}

// capsules();


const launches = async () => {

  try {
    const response = await fetch('https://api.spacexdata.com/v3/launches')
    const data = await response.json()
    for (item of data) {
      if (item.upcoming === true & item.launch_year === '2020') {

        console.log(`Mission name: ` + item.mission_name)
        console.log(`Rocket: ` + item.rocket.rocket_id)
        console.log(`Launch date: ` + item.launch_date_utc)
        console.log(' ')
        console.log(`-`.repeat(40))
        console.log(' ')
      }
    }
  } catch (error) {
    throw new CustomError(errMessage)
  }
}

// launches();

let ceo;
const info = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/info')
    const data = await response.json()
    // console.log(data);
    return data;
    
  } catch (error) {
    throw new CustomError(errMessage)
  }
}

// figuring how to access individual data from search.js 
const infoDetail = async () => {
  let data = await info();
  let ceo = data.ceo;
  return {
    ceo: data.ceo
  }
}


let details = await infoDetail();
details.ceo



// missions();

module.exports = {
  capsules,
  launches,
  info
}

