const BookFactory = require('./../factory/book')
const BookServices = require('./../services/book')

const BookController = (server) => {
    server.route({
        method: 'POST',
        path: '/book',
        config: {
            handler: async function(request, h) {
                try {
                    const book = request.payload
                    BookFactory.verify(book)
                    let bookCreated = await BookServices.save(book)

                    return h.response({ message: bookCreated.message }).code(200)
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
        path: '/book/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    const book = request.payload
                    const { id } = request.params
                    BookFactory.verify(book)

                    let bookRegistered = await BookServices.searchByID(id)
                    BookFactory.verify(bookRegistered, false)

                    bookRegistered = await BookServices.update(book, id)
                
                    return h.response({ message: bookRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'BOOK_NOT_FOUND':
                            return h.response({
                                message: 'Livro não encontrado'
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
        path: '/book/{id}',
        config: {
            handler: async function (request, h) {
                try {
                    const user = request.params.id

                    let bookRegistered = await BookServices.searchByID(user)
                    BookFactory.verify(bookRegistered, false)

                    bookRegistered = await BookServices.deleteBook(user)
                
                    return h.response({ message: bookRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'BOOK_NOT_FOUND':
                            return h.response({
                                message: 'Livro não encontrado.'
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
        path: '/book/{search}',
        config: {
            handler: async function (request, h) {
                try {
                    const search = request.params.search

                    let bookRegistered = await BookServices.search(search)
                    BookFactory.verify(bookRegistered.message, false)
                
                    return h.response({ book: bookRegistered.message }).code(200)
                } catch (error) {
                    switch (error.message) {
                        case 'INVALID_PARAMTERS':
                            return h.response({
                                message: 'Parametrôs inválidos.'
                            }).code(422)

                        case 'BOOK_NOT_FOUND':
                            return h.response({
                                message: 'Livro não encontrado.'
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

module.exports = BookController
