const configs = {}
// const env = process.env
import dotenv from "dotenv";
const env = dotenv.config({ path: "./env" });
configs.mongoDb_url = env.MONGO_DB_URL
console.log(configs);
// module.exports = configs
export default configs;