const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");
const postRouter = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

mongoose.set("strictQuery", false);

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("succesfully connected to DB"))
    .catch((e) => {
      console.log(e);
      console.log("retry connecting every 5 seconds...");
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.enable("trust proxy") //this line tells express is behind a proxy.
app.use(cors({}))

// add middleware
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("<h2>Hi there!</h2>");
  console.log("yeah it ran");
});


// user routes
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`);
});
