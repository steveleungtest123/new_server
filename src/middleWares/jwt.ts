import jsonwebtoken from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { privateKey, publicKey } from "@config/keys";

export const jwtSign = (data: any) => {
  return jsonwebtoken.sign(data, privateKey, {
    issuer: process.env.jwt_issure,
    subject: process.env.jwt_subject,
    expiresIn: "30d",
    algorithm: "RS256",
  });
};

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.token) {
    res.status(401).send({ error: "user crendential invalid", result: null });
    return;
  }
  jsonwebtoken.verify(
    req.cookies.token,
    publicKey,
    {
      issuer: process.env.jwt_issure,
      subject: process.env.jwt_subject,
      algorithms: ["RS256"],
    },
    (error, decoded) => {
      if (error) {
        res.status(401).send({ error: error, result: null });
      } else {
        req.body.jwt = {
          error: null,
          decoded: decoded,
        };
        next();
      }
      return;
    }
  );
};
