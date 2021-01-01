const UserFactory = require('./../factory/user')
const UserServices = require('./../services/user')

const UserController = (server) => {
    server.route({
        method: 'POST',
        path: '/user',
        config: {
            handler: async function (request, h) {
                try {
                    const user = request.payload
                    UserFactory.verify(user)
                    let userCreated = await UserServices.save(user)
                
                    return h.response({ message: userCreated.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)
    
                        default:
                            return h.response({
                                message: 'Erro genérico: ' + error.message
                            }).code(500)
                    }
                }
            }
        }
    })

    server.route({
        method: 'PUT',
        path: '/user/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    const user = request.payload
                    const { id } = request.params
                    UserFactory.verify(user)

                    let userRegistered = await UserServices.searchByID(id)
                    UserFactory.verify(userRegistered, false)

                    userRegistered = await UserServices.update(user, id)
                
                    return h.response({ message: userRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'USER_NOT_FOUND':
                            return h.response({
                                message: 'Usuário não encontrado'
                            }).code(404)
    
                        default:
                            return h.response({
                                message: 'Erro genérico: ' + error.message
                            }).code(500)
                    }
                }
            }
        }
    })

    server.route({
        method: 'DELETE',
        path: '/user/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    console.log(request.params.id)
                    const user = request.params.id

                    let userRegistered = await UserServices.searchByID(user)
                    UserFactory.verify(userRegistered, false)

                    userRegistered = await UserServices.deleteUser(user)
                
                    return h.response({ message: userRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'USER_NOT_FOUND':
                            return h.response({
                                message: 'Usuário não encontrado.'
                            }).code(404)
    
                        default:
                            return h.response({
                                message: 'Erro genérico: ' + error.message
                            }).code(500)
                    }
                }
            }
        }
    })

    server.route({
        method: 'GET',
        path: '/user/{search}',
        config: {
            handler: async function (request, h) {
                try {
                    const search = request.params.search

                    let userRegistered = await UserServices.search(search)
                    UserFactory.verify(userRegistered.message, false)
                
                    return h.response({ user: userRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'USER_NOT_FOUND':
                            return h.response({
                                message: 'Usuário não encontrado.'
                            }).code(404)
    
                        default:
                            return h.response({
                                message: 'Erro genérico: ' + error.message
                            }).code(500)
                    }
                }
            }
        }
    })
}

module.exports = UserController
