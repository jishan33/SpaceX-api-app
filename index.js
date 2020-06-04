const fetch = require("node-fetch")

const capsules = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/capsules')
  const data = await response.json()
  
  for (item of data) {
    console.log(item.capsule_id)
  }
}

// capsules();



const cores = async () => {
  try{
  const response = await fetch('https://api.spacexdata.com/v3/cores')
  const data = await response.json()
  for (item of data) {
    console.log(item.core_serial)
  }
  } catch(error){
    console.log(error);

  }
}

cores();

const launaches = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/launches')
  const data = await response.json()
  // console.log(data)
  let missionArr = []
  for (item of data) {
    // console.log(item.rocket.rocket_name)
    if (item.upcoming=== true &item.launch_year === '2020'){
      missionArr.push(item.mission_name)
    }
  
  }

  console.log(missionArr)
}

// launaches();

const info = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/info')
  const data = await response.json()
  console.log(data)
}

// info();

const missions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions')
  const data = await response.json()
  for (let item of data) {
    console.log(item.mission_name)
  }
}

// missions();

