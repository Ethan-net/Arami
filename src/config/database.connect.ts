const mongoose = require("mongoose");

require("dotenv").config();
const dbstring = process.env.DBSTRING;
const dbconnect = async () => {
  try {
    console.log("Connecting database");
    await mongoose.connect(dbconnect, {});
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log(error);
  }
};
