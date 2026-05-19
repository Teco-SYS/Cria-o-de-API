const UserModel = require("../models/userModel")

function GetAllUsers( request, response ) {
    const users = UserModel.findAll()

    return response.json(users)
}

function createUser(req, res)  {
    // req.body.name

    const { name } = req.body

    const newUser = {
        Id: Date.now(),
        name: name
    }

    const createdUser = UserModel.create(newUser)

    return res.status(201).json(createdUser)
}

const GetUserById = (req, res) => {
    const id = Number(req.params.id)

    const user = UserModel.FindById(id)

    if(!user) {
        return res.status(404).json({
            message: "Usuário não encontrado"
        })
    }

    return res.json(user)
}

module.exports =  {
    GetAllUsers,
    createUser,
    GetUserById
}