import express, { Request, Response } from "express";
import cookiePraser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import MongoDbClient from "@db/MongoDbClient";
import { Db, MongoError } from "mongodb";
import "@config/logger";
import QuestionsRoute from "@routes/QuestionsRoute";

const app = express();
const port = 8000;

MongoDbClient.connect(
  (db: Db) => {},
  (err: MongoError) => {}
);

const corsOptions: CorsOptions = {
  origin: [],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePraser());

app.use("/questions", QuestionsRoute);
// app.use("/doc", express.static("static/apidoc"))
app.use("/doc", express.static("apidoc"))

app.use("/", (req: Request, res: Response) => {
  res.status(200).json({
    code: 400,
    message: "route not found",
  });
});



app.listen(port);
