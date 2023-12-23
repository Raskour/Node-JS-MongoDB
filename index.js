const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const userRouter = require("./routes/user");

const app = express();
PORT = 8000;

//Connection
connectMongoDb(
  "mongodb+srv://rasmeetkour735:Rasna171988%40@rasmeet.8tal5qq.mongodb.net/rasmeet?retryWrites=true&w=majority"
).then(() => console.log("MongoDb Connected"));

//Middleware- Plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use("api/users", userRouter);

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
