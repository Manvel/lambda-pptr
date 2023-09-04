const {handler} = require("./dist/index")

async function run() {
  console.log(await handler());
}

run()
