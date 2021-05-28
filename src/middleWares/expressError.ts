import logger from "@config/logger";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const ExpressErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('in error')
  logger.warn(err.message);
  res.status(500).json({
    code: 500,
    message: `Something broke! ${err.name}`,
  });
};

export default ExpressErrorHandler;
