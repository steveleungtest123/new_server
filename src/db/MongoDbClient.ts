import logger from "@config/logger";
import mongoose, { Connection } from "mongoose";

const MongoDbClient = {
  _db_url: process.env.mongo as string,
  db: null as unknown as Connection,
  connect: async function (onSuccess?: Function, onFail?: Function) {
    try {
      mongoose.connect(this._db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.Promise = global.Promise;
      this.db = mongoose.connection;
      this.db.on("connected", () => {
        logger.info("db connected succeed!");
        if (typeof onSuccess === "function") onSuccess(this.db);
      });
      this.db.on("error", (error: mongoose.Error) => {
        logger.error("db connection error: " + error);
        if (typeof onFail === "function") onFail(error);
      });
    } catch (err) {
      logger.error("db connection exception error: " + err);
    }
  },
};

export default MongoDbClient;
