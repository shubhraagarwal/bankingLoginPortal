const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://username:password1234@cluster0.owfcs.mongodb.net/bankLogin?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send(user);
  } catch (err) {
    res.status(500).send(err);

    console.log(err);
  }
});
app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
