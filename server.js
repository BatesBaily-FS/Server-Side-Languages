const http = require("http");
require("dotenv").config();
const app = require("/Users/bailybates/Server_Side_Languages/Server-Side-Languages/server.js");

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Service is up`);
});
