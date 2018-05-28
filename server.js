const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const list = ["Thing1", "Thing2", "Thing3", "Thing4"];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Le root"));

app.get("/stuff/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id < list.length) {
    res.send(list[id]);
  } else {
    res.send("Out of bounds");
  }
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
