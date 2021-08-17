const express = require("express");
const morgan = require("morgan"); // used to print api endpoint
const mongoose = require("mongoose");
require("dotenv").config();
const studentRoute = require("./routes/student");
const courseRoute = require("./routes/course");
const app = express();
const mongo_url = process.env.MONGO_URL;
mongoose
  .connect(mongo_url, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});
app.use("/api/student", studentRoute);
app.use("/api/course", courseRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Api is running on port ${port} - ${process.env.NODE_ENV}`);
});
