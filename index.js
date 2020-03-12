require('dotenv').config();// read from a .env file located at the root of the project
// and merge the key/value pairs into process.env

const server = require("./api/server.js");
// make the port be assigned by the Server
// heroku will place the .PORT environment on their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


// add a "start" script to run node index.js in package.json