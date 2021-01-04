const JWT = require('jsonwebtoken')
const process = require('dotenv').config().parsed

const AuthServices = () => {
    const generate = (user) => {
        return new Promise((resolve, reject) => {
            return JWT.sign(user, process.SECRET, { algorithm: 'HS256' }, (err, token) => {
                if (err) {
                    reject(new Error('JWT_ERROR'))
                }
    
                resolve(token)
            })
        })
    }

    return {
        generate
    }
}

module.exports = AuthServices()
