const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.listen(4000, console.log("Server running on Port 4000"));
