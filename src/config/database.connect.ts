import mongoose from "mongoose";

require("dotenv").config();

const dbstring = process.env.DBSTRING;

const dbconnect = async () => {
  try {
    console.log("connecting to database");
    await mongoose.connect(dbstring as string, {});
    console.log("Database Connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnect;
