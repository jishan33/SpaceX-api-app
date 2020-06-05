const fetch = require("node-fetch")
const chalk = require('chalk');
const emoji = require('node-emoji');
const CustomError = require("./custom-error")



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


const info = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/info')
    const data = await response.json()
    return data;
    
  } catch (error) {
    throw new CustomError(errMessage)
  }
}

const historicalEvents = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/history')
    const data = await response.json()
    return data;
    
  } catch (error) {
    throw new CustomError(errMessage)
  }
}


const rockets = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/payloads')
    const data = await response.json()
    return data;
    
  } catch (error) {
    throw new CustomError(errMessage)
  }
}

// const test = async() => {
// const events = await rockets();
// console.log(events)

// }

// test();





module.exports = {
  capsules,
  launches,
  info,
  historicalEvents,
  rockets
}

