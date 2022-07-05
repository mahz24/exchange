require("dotenv").config({ path: "config.env" });
const express = require("express");
const { appRoute } = require("./routes/app.routes");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect("/latest");
});
app.use("/", appRoute);

PORT = 4000;

app.listen(PORT, () => {
  console.log(`server runnin in port ${PORT}`);
});
