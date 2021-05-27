import { jwtSign } from "@middleWares/jwt";
import express, { NextFunction, Request, Response, Router } from "express";

const QuestionsRoute: Router = express.Router();

QuestionsRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "good",
  });
});

export default QuestionsRoute;
