import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import proxy from "express-http-proxy";
require("dotenv").config();

import dbconnect from "./src/config/database.connect";
const app: Application = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.URL,
    allowedHeaders: ["Authorization", "content-Type"],
    credentials: true,
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.set("trust proxy", 1);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: (req: any) => (req.user ? 1000 : 100),
    message: { error: "Too many request, Please try again" },
    standardHeaders: true,
    legacyHeaders: true,
    keyGenerator: (req: any) => req.ip,
  })
);

dbconnect();

app.get("/", (req: Request, res: Response) => {
  res.send("hello, ApI is working");
});

app.listen(port, () => {
  console.log(`you are now running on server ${port}`);
});
