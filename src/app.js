import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

// app.use(cors()) // this is okk but we can use object or more options in this 
// app.use() is mostly use for setup middleware or configure files like we config below

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({ limit: "16kb" })) // this is limit of our json file i.e. 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // url se aane vale sab parameters ko encoded krne ke liye express.urlencoded and we use (extended: true) taaki params nested roop me aa sake in json file 
app.use(express.static("Public")) // express.static is use for save files like photos, pdf, txt file etc. on our local storage or server. so here "Public" is folder that exist in my current dir.
app.use(cookieParser()) // for set or manipulate cookies in user browser. by the way it's also contain object like core() but this is not neccessary right now.

// Routes import
import userRouter from './routes/user.routes.js'

// Route Declaration

// phle hum app.get ki help se route likhte the aur vahi pe controller bhi but ab esa nahi hoga kyuki humne sab files ko seperate kar diya hai toh ab hume route ko use karne ke liye ya laane ke liye middleware ka use karna hoga i.e. app.use()

app.use("/api/v1/users", userRouter)


export default app