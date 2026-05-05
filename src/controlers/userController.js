const UserModel = require("../models/userModel")

function GetAllUsers( request, response ) {
    const users = UserModel.findAll()

    return response.json(users)
}

module.exports =  {
    GetAllUsers
}