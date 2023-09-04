const {handler} = require("./index")

async function run() {
  console.log(await handler());
}

run()
