import mongoos from "mongoose";
import constants from "../constants.js";
import configs from "../config.js";
const MONGO_DB_URL= 'mongodb+srv://asharmaa097:loki123@cluster1.zvblgkx.mongodb.net'

const connect = async () => {
  try {
    const connInstance = await mongoos.connect(
      `${MONGO_DB_URL}/${constants.DB_NAME}`
    );
    console.log("mongo connected", connInstance.connection.host);
  } catch (e) {
    console.log("MongoDB connection error", e);
  }
};

export default connect;
