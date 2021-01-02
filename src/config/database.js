const mysql = require('mysql')
const process = require('dotenv').config().parsed

const createDatabase =  () => {
    let connection = null

    const start = () => {
        console.log('> [database] Starting...')
        if (!connection) {
            connection = mysql.createConnection({
                host: process.DB_HOST,
                user: process.DB_USER,
                password: process.DB_PASSWORD,
                database: process.DB_DATABASE
            })
        }

        connection.connect((err) => {
            if (!err) {
                console.log('> [database] Starting Done!')
            } else {
                console.log(`> [database] Error starting: ${err}`)
            }
        })

        return connection
    }

    const stop = () => {
        console.log('> [database] Stopping...')
        connection.end()
        console.log('> [database] Stopping Done!')
    }

    return {
        start,
        stop
    }
}

module.exports = createDatabase
