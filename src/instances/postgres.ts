import { Sequelize } from "sequelize";
import {config} from "dotenv"
config()


export const postegresCon = new Sequelize(
    process.env.PG_DB as string,
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        dialect:"postgres",
        port:parseInt(process.env.PG_PORT as string)
    }
)

