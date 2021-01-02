const UserController = require('./../controllers/user')
const BookController = require('./../controllers/book')
const ReplicaController = require('./../controllers/replica')

const createRoutes = (server) => {
    const create = () => {
        console.log('> [routes] Starting...')
        UserController(server)
        BookController(server)
        ReplicaController(server)
        console.log('> [routes] Starting done! All routes configured.')
    }

    return {
        create
    }
}

module.exports = createRoutes
