const ReplicaFactory = require('./../factory/replica')
const ReplicaServices = require('./../services/replica')

const ReplicaController = (server) => {
    server.route({
        method: 'POST',
        path: '/replica',
        config: {
            handler: async function (request, h) {
                try {
                    const replica = request.payload
                    ReplicaFactory.verify(replica)
                    let replicaCreated = await ReplicaServices.save(replica)
                
                    return h.response({ message: replicaCreated.message }).code(200)
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
        path: '/replica/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    const replica = request.payload
                    const { id } = request.params
                    ReplicaFactory.verify(replica)

                    let replicaRegistered = await ReplicaServices.searchByID(id)
                    ReplicaFactory.verify(replicaRegistered, false)

                    replicaRegistered = await ReplicaServices.update(replica, id)
                
                    return h.response({ message: replicaRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'REPLICA_NOT_FOUND':
                            return h.response({
                                message: 'Cópia não encontrada'
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
        path: '/replica/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    const replica = request.params.id
                    let replicaRegistered = await ReplicaServices.searchByID(replica)
                    ReplicaFactory.verify(replicaRegistered, false)

                    replicaRegistered = await ReplicaServices.deleteReplica(replica)
                
                    return h.response({ message: replicaRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'REPLICA_NOT_FOUND':
                            return h.response({
                                message: 'Cópia não encontrada.'
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
        path: '/replica/{search}',
        config: {
            handler: async function (request, h) {
                try {
                    const search = request.params.search

                    let replicaRegistered = await ReplicaServices.search(search)
                    ReplicaFactory.verify(replicaRegistered.message, false)
                
                    return h.response({ replica: replicaRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'REPLICA_NOT_FOUND':
                            return h.response({
                                message: 'Cópia não encontrada.'
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

module.exports = ReplicaController

