import express from "express";
require("dotenv").config();

import dbconnect from "./src/config/database.connect";
const app = express();
const port = process.env.PORT;

dbconnect();

app.get("/", (req: any, res: any) => {
  res.send("hello, ApI is working");
});

app.listen(port, () => {
  console.log(`you are now running on server ${port}`);
});
