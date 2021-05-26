import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cookiePraser from 'cookie-parser'
import cors, { CorsOptions } from 'cors'
import MongoDbClient from '@db/MongoDbClient'
import { MongoError } from 'mongodb'
import "@config/logger"

const app = express()
const port = 8000

MongoDbClient.connect(() => {

}, (err: MongoError) => {
  
})

const corsOptions: CorsOptions = {
  origin: [],
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookiePraser())

app.use('/', (req: Request, res: Response) => {
  res.status(200).json({
    user: 'hello',
    bb: 'bb'
  })
})
app.listen(port)