const createDatabase = require('./../config/database')

const ReplicaModel = () => {
    const connection = createDatabase().start()

    const save =  (replica) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `INSERT INTO copia_livro (codigo, livro_id) VALUES (?, ?)`,
                values: [ replica.codigo, replica.livro_id ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao inserir cópia de livro: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Cópia ID: ${row.insertId} inserido com sucesso!`
                    })
                }
            })
        })
    }

    const searchByID = (replica) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM copia_livro WHERE id = ?`,
                values: [ replica ]
            }, (err, row) => {
                if (err) {
                    resolve({
                        status: 500,
                        message: 'Erro ao buscar cópia' + err
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

    const update = (replica, id) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `UPDATE copia_livro SET codigo = ?, livro_id = ? WHERE id = ?`,
                values: [ replica.codigo, replica.livro_id, id ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao atulizar cópia: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Cópia ID: ${id} atualizado com sucesso!`
                    })
                }
            })
        })
    }

    const deleteReplica = (replica) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `DELETE FROM copia_livro WHERE id = ?`,
                values: [ replica ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao atulizar cópia: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Cópia ID: ${replica} apagada com sucesso!`
                    })
                }
            })
        })
    }

    const search = (replica) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM copia_livro WHERE codigo LIKE ? LIMIT 1`,
                values: [ replica ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao buscar usuário' + err
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
        deleteReplica,
        search
    }
}

module.exports = ReplicaModel
