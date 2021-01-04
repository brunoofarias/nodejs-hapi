const UserFactory = require('./../factory/user')
const UserServices = require('./../services/user')
const AuthServices = require('./../services/auth') 

const AuthController = (server) => {
    server.route({
        method: 'POST',
        path: '/auth',
        config: {
            auth: false,
            handler: async function (request, h) {
                try {
                    const user = request.payload
                    UserFactory.verifyAuth(user)

                    let userRegistered = await UserServices.auth(user)
                    UserFactory.verify(userRegistered.message, false)

                    let token = await AuthServices.generate(userRegistered)

                    return h.response({ auth: true, token: token }).code(200)
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
}

module.exports = AuthController
