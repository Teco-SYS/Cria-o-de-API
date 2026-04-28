const express = require("express")

const app = express()

function callbackDaraiz( request, response) {
    response.send("API aeromobilistica, Selva, Leões de guerraaaaaa, pantanal")
}

function CallBackListaUsuarios( request, response ) {
   
    const ListaUsuarios = [
         {
            Id: 1,
            Name: "Mateus"
         } 
    ]

    response.json(ListaUsuarios)
}

app.get("/", callbackDaraiz)

app.get("/users", CallBackListaUsuarios)

app.listen(3000, () => {
    console.log("Servidor Online em http://localhost:3000")
})

