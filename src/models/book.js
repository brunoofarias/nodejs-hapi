const createDatabase = require('./../config/database')

const BookModel = () => {
    const connection = createDatabase().start()

    const save = (book) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: 'INSERT INTO livro (livro, autor, isbn) VALUES (?, ?, ?)',
                values: [ book.livro, book.autor, book.isbn ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao inserir livro: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Livro ID: ${row.insertId} inserido com sucesso!`
                    })
                }
            })
        })
    }

    const searchByID = (book) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM livro WHERE id = ?`,
                values: [ book ]
            }, (err, row) => {
                if (err) {
                    resolve({
                        status: 500,
                        message: 'Erro ao buscar livro' + err
                    })
                } else {
                    const status = row.length > 0 ? 200 : 404
                    const message = row.length > 0 ? row[0] : false

                    resolve({
                        status: status,
                        message: message
                    })
                }
            })
        })
    }

    const update = (book, id) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `UPDATE livro SET livro = ?, autor = ?, isbn = ? WHERE id = ?`,
                values: [ book.livro, book.autor, book.isbn, id ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao atulizar livro: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Livro ID: ${id} atualizado com sucesso!`
                    })
                }
            })
        })
    }

    const deleteBook = (book) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `DELETE FROM livro WHERE id = ?`,
                values: [ book ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao atulizar usuário: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Livro ID: ${book} apagado com sucesso!`
                    })
                }
            })
        })
    }

    const search = (book) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM livro WHERE livro LIKE ? OR isbn LIKE ? LIMIT 1`,
                values: [ `%${book}%`, book ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao buscar livro' + err
                    })
                } else {
                    const status = row.length > 0 ? 200 : 404
                    const message = row.length > 0 ? row[0] : false

                    resolve({
                        status: status,
                        message: message
                    })
                }
            })
        })
    }

    return {
        save,
        searchByID,
        update,
        deleteBook,
        search
    }
}

module.exports = BookModel
