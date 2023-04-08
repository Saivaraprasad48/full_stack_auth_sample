const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  res.send({ msg: "Ok" });
  const { email, password } = req.body;
  console.log(email, password);
});

app.listen(3004, () => {
  console.log("Server Started");
});
