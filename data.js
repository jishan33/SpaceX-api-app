const fetch = require("node-fetch")
const chalk = require('chalk');
const emoji = require('node-emoji');


const errMessage = chalk.yellowBright(`error is in data section `) + emoji.get('cry')


const capsules = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/capsules')
    const data = await response.jsons()

    for (item of data) {
      console.log(item.capsule_id)
    }
  } catch (error) {
    throw (errMessage)
  }
}

capsules();



const cores = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/cores')
    const data = await response.json()
    for (item of data) {
      console.log(item.core_serial)
    }
  } catch (error) {
    throw (errMessage)
  }
}

// cores();

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
    throw (errMessage)
  }
}

// launches();

const info = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/info')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw (errMessage)
  }
}

// info();

const missions = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions')
    const data = await response.json()
    for (let item of data) {
      console.log(item.mission_name)
    }
  } catch (error) {
    throw (errMessage)
  }
}

// missions();

module.exports = {
  capsules,
  cores,
  launches,
  info,
  missions
}

