import express, { Application } from "express";
import playerRoute from "./routes/playerRoute"; 


const app: Application = express();

app.use(express.json());

const port: number | string = process.env.PORT || "4000";

app.use("/api",playerRoute);
 


app.listen(port, () => {
    console.log(`the server run on port:${port}`);
});
