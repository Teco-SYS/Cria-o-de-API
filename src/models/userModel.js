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

const update = (id, data) => {
    const user = userList.find( user => user.id === id)

    if ( !user ) return null

    if ( data.name ) {
        user.name = data.name
    }

    return user
}

    const remove = (id) => {
        const index = userList.findIndex( user => user.id === id)

        if ( index === -1 ) return null

        const deletedUser = userList[index]

        // splice tira o usuário do array e se ele for o número 3 quem for o 4 vira o 3 já q o 3 foi retirado
        userList.splice(index, 1)

        return deletedUser
}

module.exports = {
    findAll,
    create,
    FindById,
    update,
    remove
}