const UserController = require('./../controllers/user.js')
const BookController = require('./../controllers/book.js')

const createRoutes = (server) => {
    const create = () => {
        console.log('> [routes] Starting...')
        UserController(server)
        BookController(server)
        console.log('> [routes] Starting done! All routes configured.')
    }

    return {
        create
    }
}

module.exports = createRoutes
