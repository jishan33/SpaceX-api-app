const yargs = require('yargs');
const data = require("./data.js");
const axios = require("axios")


const options = yargs
  
  .option("s", { alias: "search", describe: "Search term", type: "string" })
  .argv;

if (options.search) {
  console.log(`Searching for jokes about ${options.search}...`)
} else {
  console.log("Here's a basic info for you:");
}

// The url depends on searching or not
const url = options.search ? `https://api.spacexdata.com/v3/info${escape(options.search)}` : data.info();

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
    for(let key in data.info() ){
        console.log(key)
      }

    // if (options.search) {
    //   // if searching for value, loop over the results
    //   for(let key in data ){
    //     console.log(key)
    //   }
     
    //   if (res.data.results.length === 0) {
    //     console.log("no value found :'(");
    //   }
    // } else {
    //   console.log(res.data.value);
    // }
  });
