import mongoos from "mongoose";
import constants from "../constants.js";
import configs from "../config.js";

const connect = async () => {
  try {
    const connInstance = await mongoos.connect(
      `${configs.mongoDb_url}/${constants.DB_NAME}`
    );
    console.log("mongo connected", connInstance.connection.host);
  } catch (e) {
    console.log("MongoDB connection error", e);
  }
};

export default connect;
