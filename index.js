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

app.use("/api", studentRoute);
app.use("/api", courseRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Api is running on port ${port} - ${process.env.NODE_ENV}`);
});
