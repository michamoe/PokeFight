import mongoose from "mongoose";
import express from "express";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const port = 8000;

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
