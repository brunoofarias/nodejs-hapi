const createDatabase = require('./../config/database')

const userModel = () => {
    const connection = createDatabase().start()

    const save =  (user) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `INSERT INTO usuario (nome, cpf, data_nascimento, endereco, cidade, estado, cep, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                values: [ user.nome, user.cpf, user.data_nascimento, user.endereco, user.cidade, user.estado, user.cep, user.complemento ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao inserir usuário: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Usuario ID: ${row.insertId} inserido com sucesso!`
                    })
                }
            })
        })
    }

    const searchByID = (user) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM usuario WHERE id = ?`,
                values: [ user ]
            }, (err, row) => {
                if (err) {
                    resolve({
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

    const update = (user, id) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `UPDATE usuario SET nome = ?, cpf = ?, data_nascimento = ?, endereco = ?, cidade = ?, estado = ?, cep = ?, complemento = ? WHERE id = ?`,
                values: [ user.nome, user.cpf, user.data_nascimento, user.endereco, user.cidade, user.estado, user.cep, user.complemento, id ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao atulizar usuário: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Usuario ID: ${id} atualizado com sucesso!`
                    })
                }
            })
        })
    }

    const deleteUser = (user) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `DELETE FROM usuario WHERE id = ?`,
                values: [ user ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao atulizar usuário: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Usuario ID: ${user} apagado com sucesso!`
                    })
                }
            })
        })
    }

    const search = (user) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM usuario WHERE nome LIKE ? OR cpf LIKE ? LIMIT 1`,
                values: [ `%${user}%`, user ]
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

    const auth = (user) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM usuario WHERE cpf LIKE ? AND senha LIKE ? LIMIT 1`,
                values: [ user.cpf, user.senha ]
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
        deleteUser,
        search,
        auth
    }
}

module.exports = userModel
