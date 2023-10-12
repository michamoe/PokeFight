import express from "express";
import "./db/server.js";
import pokemonsRouter from "./routes/pokemonsrouters.js";

const app = express();
const port = 8001;

app.use(express.json());
app.use("/pokemon", pokemonsRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
