const express = require("express")

const app = express()

function callbackDaraiz( request, response) {
    response.send("API aeromobilistica, Selva, Leões de guerraaaaaa, pantanal")
}

app.get("/", callbackDaraiz)

app.listen(3000, () => {
    console.log("Servidor Online em http://localhost:3000")
})

