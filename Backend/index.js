const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
require("dotenv").config();
require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server runing on ${PORT}`);
});
