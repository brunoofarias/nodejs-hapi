const createDatabase = require('./../config/database')

const rentModel = () => {
    const connection = createDatabase().start()

    const create = (rent) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: 'INSERT INTO aluguel (copia_id, usuario_id, data_entrega_esperada) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? DAY))',
                values: [ rent.copia, rent.usuario, rent.dias ]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao inserir aluguel: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Aluguel ID: ${row.insertId} inserido com sucesso!`
                    })
                }
            })
        })
    }

    const markAsreturned = (rent) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: 'UPDATE aluguel SET data_entrega_efetiva = NOW() WHERE id = ?',
                values: [ rent]
            }, (err, row) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao marcar aluguel como devolvido: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        message: `Aluguel ID: ${rent} marcado como devolvido com sucesso!`
                    })
                }
            })
        })
    }

    const searchByID = (rent) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT * FROM aluguel WHERE id = ?`,
                values: [ rent ]
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

    const getDelayedRentalsByUser = (user) => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: 'SELECT * FROM aluguel WHERE usuario_id = ? AND data_entrega_efetiva > data_entrega_esperada',
                values: [ user ]
            }, (err, rows) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao buscar alugueis: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        rents: rows
                    })
                }
            })
        })
    }

    const getBooksMostDelayedPerMonth = () => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT 
                        SUM(1) as atrasos,
                        l.livro,
                        DATE_FORMAT(data_entrega_esperada, '%m/%Y') as mes_atraso
                    FROM aluguel a
                    JOIN copia_livro cl ON cl.id = a.copia_id
                    JOIN livro l ON l.id = cl.livro_id
                    WHERE data_entrega_efetiva > data_entrega_esperada
                    GROUP BY mes_atraso ORDER BY data_entrega_esperada`
            }, (err, rows) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao buscar livros mais atradados: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        result: rows
                    })
                }
            })
        })
    }

    const getBooksMostRentedPerCity = () => {
        return new Promise((resolve, reject) => {
            connection.query({
                sql: `SELECT 
                        SUM(1) as alugueis,
                        l.livro,
                        u.cidade,
                        DATE_FORMAT(a.data_inicial, '%m/%Y') as data_aluguel
                    FROM aluguel a
                    JOIN copia_livro cl ON cl.id = a.copia_id
                    JOIN livro l ON l.id = cl.livro_id
                    JOIN usuario u ON u.id = a.usuario_id
                    GROUP BY cidade, data_aluguel ORDER BY data_aluguel DESC, alugueis DESC`
            }, (err, rows) => {
                if (err) {
                    reject({
                        status: 500,
                        message: 'Erro ao buscar livros mais alugados: ' + err
                    })
                } else {
                    resolve({
                        status: 200,
                        result: rows
                    })
                }
            })
        })
    }

    return {
        create,
        markAsreturned,
        searchByID,
        getDelayedRentalsByUser,
        getBooksMostDelayedPerMonth,
        getBooksMostRentedPerCity
    }
}

module.exports = rentModel
