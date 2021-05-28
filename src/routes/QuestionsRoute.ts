import { jwtSign } from "@middleWares/jwt";
import express, { NextFunction, Request, Response, Router } from "express";

const QuestionsRoute: Router = express.Router();

/**
 * @api {get} /questions Request question List By Page
 * @apiGroup Questions
 * @apiName GetQuestionListByPage
 * @apiParam {Number} [page] the page number of the list
 * @apiSuccess {String} status the status name
 * @apiSuccessExample {json} Success-Response-With-Valid:
 * {
 *  "status": "good"
 * }
 */
QuestionsRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "good",
  });
});

export default QuestionsRoute;
