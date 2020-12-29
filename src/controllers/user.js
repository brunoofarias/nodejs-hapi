const UserController = (server) => {
    server.route({
        method: 'GET',
        path: '/user',
        handler: function (request, h) {
            return 'Hello World!!'
        }
    })
}

module.exports = UserController
