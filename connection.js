const mongoose = require("mongoose");

async function connectMongoDb(url) {
  return;
  //Connection
  mongoose.connect(url);
}

module.exports = { connectMongoDb };
