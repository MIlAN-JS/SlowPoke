import dotenv from "dotenv"
dotenv.config()
import {Redis} from "ioredis"


const redis = new Redis({
    host : process.env.REDDIS_HOST,
    port : process.env.REDDIS_PORT,
    password : process.env.REDDIS_PASSWORD
})


redis.on("connect" , ()=>{
    console.log("server connected to redis")
})

redis.on("error", (error)=>{
    console.log("reddis connection error", error)
})



export default redis