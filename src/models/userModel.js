const userList = require("../Data/Users")

const findAll = () => {
    return userList
}

const create = (user) => {
    userList.push(user)

    return user
}

const FindById = (id) => {
    return userList.find( user => user.id === id)
}

module.exports = {
    findAll,
    create,
    FindById
}