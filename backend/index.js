const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const app = express();
const jwt = require("jsonwebtoken");
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

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      const token = jwt.sign(
        {
          email: req.body.email,
          name: req.body.name,
        },
        "secretabc"
      );
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    res.status(500).send(err);

    console.log(err);
  }
});

app.get("/getUserDetails", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    // const decoded = jwt.decode(token);
    // console.log(decoded, typeof decoded);
    const verify = jwt.verify(token, "secretabc");
    const email = verify.email;
    const user = await User.findOne({ email: email });

    return res.json({ status: "ok", name: user.name });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});
app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
