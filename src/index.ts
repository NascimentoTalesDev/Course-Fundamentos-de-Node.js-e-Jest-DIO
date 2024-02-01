import express from "express"
import { router } from "./router"

const PORT = 5000
const service = express()
service.use(express.json())

service.use(router)

service.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})