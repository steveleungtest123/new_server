import logger from '@config/logger';
import {Db, MongoClient} from 'mongodb'

const MongoDbClient = {
  client: null as unknown as MongoClient,
  db: null as unknown as Db,
  _dbUrl: process.env.mongo || "",
  connect: async function(onSuccess?: Function, onFail?: Function) {
    const client = new MongoClient(this._dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    try {
      const res = await client.connect()
      this.db = res.db();
      logger.info("db connect success")
      if (typeof onSuccess === 'function') onSuccess(this.db);
    } catch (err) {
      logger.error("db connect failed: " + err)
      setTimeout(() => {
        logger.info("db reconnecting ...")
        this.connect(onSuccess, onFail)
      }, 3000)
      if (typeof onFail === 'function') onFail(err);
    }
  },
  close: function() {
    this.client.close()
  }
}

export default MongoDbClient