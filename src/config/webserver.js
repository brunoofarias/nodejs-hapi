const process = require('dotenv').config().parsed
const hapi = require('@hapi/hapi')
const createRoutes = require('./routes.js')

const createWebserver = () => {
    const server = hapi.server({
        port: process.PORT,
        host: 'localhost'
    })

    const routes = createRoutes(server)

    const start = async () => {
        console.log('> [webserver] Starting....')
        routes.create()
        await server.start()
        console.log(`> [webserver] Starting done! Webserver running in port ${process.PORT}`)
    }

    const stop = async () => {
        console.log('> [webserver] Stoppping....')
        await server.stop()
        console.log('> [webserver] Stoppping Done')
    }

    return {
        start,
        stop
    }
}

module.exports = createWebserver
