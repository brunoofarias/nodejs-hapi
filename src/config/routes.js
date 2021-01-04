const UserController = require('./../controllers/user')
const BookController = require('./../controllers/book')
const ReplicaController = require('./../controllers/replica')
const AuthController = require('./../controllers/auth')
const RentController = require('./../controllers/rent')

const createRoutes = (server) => {
    const create = () => {
        console.log('> [routes] Starting...')
        UserController(server)
        BookController(server)
        ReplicaController(server)
        AuthController(server)
        RentController(server)
        console.log('> [routes] Starting done! All routes configured.')
    }

    return {
        create
    }
}

module.exports = createRoutes
