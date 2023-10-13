import express from "express";
import "./db/server.js";
import mongoose from "mongoose";
import cors from "cors";
import pokemonsRouter from "./routes/pokemonsrouters.js";
const app = express();
const port = 8001;

app.use(cors());
app.use(express.json());
app.use("/pokemon", pokemonsRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
