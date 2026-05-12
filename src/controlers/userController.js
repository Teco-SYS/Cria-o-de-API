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

module.exports =  {
    GetAllUsers,
    createUser
}