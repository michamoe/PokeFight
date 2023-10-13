import mongoose from "mongoose";
import express from "express";
import cors from "cors";
const app = express();
const port = 8001;

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.stack);
  });
