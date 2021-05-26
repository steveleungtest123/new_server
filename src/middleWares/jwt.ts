import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import { NextFunction, Request, Response } from 'express'

export const sign = (data: any) => {
  return (
    jsonwebtoken.sign(data, "", {
      issuer: "",
      subject: "",
      expiresIn: "7d",
      algorithm: "RS256"
    })
  )
}

export const verify = (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.token) {
    res.status(401).send({ error: "user crendential invalid", result: null })
    return
  }
  jsonwebtoken.verify(req.cookies.token, "", {
    issuer: "",
    subject: "",
    algorithms: ["RS256"]
  }, (error, decoded) => {
    if (error) {
      res.status(401).send({ error: error, result: null })
    } else {
      req.body.jwt = {
        error: null,
        decoded: decoded
      }
      next()
    }
    return
  })
}