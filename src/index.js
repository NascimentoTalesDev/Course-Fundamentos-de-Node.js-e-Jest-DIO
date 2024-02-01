import express from "express"

const PORT = 5000
const service = express()

service.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})