const express = require("express")
const userRoutes = require("./Routes/userRoutes")

const app = express()

app.use(express.json())

function callbackDaraiz( request, response) {
    response.send("API aeromobilistica, Selva, Leões de guerraaaaaa, pantanal")
}

app.get("/", callbackDaraiz)

app.use("/users", userRoutes)

module.exports = app