import express from "express";
import cors from "cors";
import router from "./app/routers/LoginRouters.js";
const app = express();
const corss = cors();

app.use(express.json()) 
app.use(corss)
app.use(router)


//app
export default app
