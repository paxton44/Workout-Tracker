// Used from mini project server.js file for boilerplate example
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

// make variable for the workout.js file
const workout = require("./models/workout");

//make a variable for the api routes
const apiRoutes = require("./routes/apiRoutes");

// make a variable for the html routes
const htmlRoutes = require("./routes/htmlRoutes");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
