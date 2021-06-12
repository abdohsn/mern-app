const express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const authorRouter = require("./routes/authors");

mongoose.connect(
  "mongodb://localhost:27017/goodReads",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to db");
  }
);

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getcairo", (req, res) => {
  request(
    "http://api.weatherstack.com/current?access_key=139443979f6efd87219e974b7ff5a94c&query=cairo",
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var pardedbody = JSON.parse(body);
        var temp_c = pardedbody["current"]["temperature"];
        res.send({ temp_c });
      }
    }
  );
});

app.use(express.json());
app.use("/authors", authorRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
