const express = require("express")

const userController = require("./controlers/userController")

const app = express()

app.use(express.json())

function callbackDaraiz( request, response) {
    response.send("API aeromobilistica, Selva, Leões de guerraaaaaa, pantanal")
}

app.get("/", callbackDaraiz)

app.get("/users", userController.GetAllUsers)

app.get("/users/:id", userController.GetUserById)

app.post("/users", userController.createUser)

module.exports = app