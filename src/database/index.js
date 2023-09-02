const express = require('express');
const mongoose = require('mongoose');

const app = express();
import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Gawde123:Gawde@123@cluster0.qdego2c.mongodb.net/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;