const createWebserver = require('./webserver.js')
const createDatabase = require('./database.js')

const createCore = (config = {}) => {
    const webserver = config.webserver || createWebserver()
    const database = config.database || createDatabase()

    const start = async () => {
        console.log('> [app] Startting...')
        await webserver.start()
        await database.start()
        console.log('> [app] Startting Done!...')
    }

    const stop = () => {
        console.log('> [app] Stoping...')
        webserver.stop()
        database.stop()
        console.log('> [app] Stoped...')
    }

    return {
        start,
        stop
    }
}

module.exports = createCore
