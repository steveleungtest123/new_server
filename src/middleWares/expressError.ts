import logger from "@config/logger";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const ExpressErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
) => {
  logger.warn(err.message);
  logger.warn(JSON.stringify(req.body));
  res.status(500).json({
    code: 500,
    message: `Something broke! ${err.name}`,
  });
};

export default ExpressErrorHandler;
