import dotenv from "dotenv"
import { Sequelize } from "sequelize"

dotenv.config()

const db = new Sequelize("db_driling", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db
