import express, { NextFunction, Request, Response, Router } from 'express'

const QuestionsRoute: Router = express.Router()

QuestionsRoute.get("/", (req: Request, res: Response, next: NextFunction) => {
  
})

export default QuestionsRoute