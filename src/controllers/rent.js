const RentFactory = require('./../factory/rent')
const RentServices = require('./../services/rent')

const RentController = (server) => {
    server.route({
        method: 'POST',
        path: '/rent',
        config: {
            handler: async function (request, h) {
                try {
                    const rent = request.payload
                    RentFactory.verify(rent)
                    let rentCreated = await RentServices.create(rent)
                
                    return h.response({ message: rentCreated.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'USER_IN_BLACK_LIST':
                            return h.response({
                                message: 'Usuário atrasou 2 aluguéis ou mais no passado.'
                            }).code(412)
    
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
        path: '/rent/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    const { id } = request.params

                    let rentRegistered = await RentServices.searchByID(id)
                    RentFactory.verify(rentRegistered, false)

                    rentRegistered = await RentServices.markAsreturned(id)
                
                    return h.response({ message: rentRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'RENT_NOT_FOUND':
                            return h.response({
                                message: 'Aluguel não encontrado'
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
        path: '/rent/getBooksMostDelayedPerMonth',
        config: {
            handler: async function (request, h) {
                try {
                    let rents = await RentServices.getBooksMostDelayedPerMonth()
                
                    return h.response({ result: rents }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'RENT_NOT_FOUND':
                            return h.response({
                                message: 'Aluguel não encontrado'
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
        path: '/rent/getBooksMostRentedPerCity',
        config: {
            handler: async function (request, h) {
                try {
                    let rents = await RentServices.getBooksMostRentedPerCity()
                
                    return h.response({ result: rents }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'RENT_NOT_FOUND':
                            return h.response({
                                message: 'Aluguel não encontrado'
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

module.exports = RentController
