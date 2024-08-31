const sendMail = require('./controller/sendMail')
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/sendMail", sendMail);

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Server is running succesfully on PORT ${PORT}`)
);
