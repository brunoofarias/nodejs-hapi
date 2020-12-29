const UserController = require('./../controllers/user.js')

const createRoutes = (server) => {
    const create = () => {
        console.log('> [routes] Starting...')
        UserController(server)

        console.log('> [routes] Starting done! All routes configured.')
    }

    return {
        create
    }
}

module.exports = createRoutes
