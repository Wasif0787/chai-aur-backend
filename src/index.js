import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js"

dotenv.config({
    path: './ env'
})

connectDB()
    .then(() => {
        app.on('error', (err) => {
            console.error("Server Error", err)
            throw err
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`listening on ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err)
    })