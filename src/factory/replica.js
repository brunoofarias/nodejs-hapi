const { arrayKeysExists } = require('./../utils/utils')

const ReplicaFactory = () => {
    const verify = (replica, checkParams = true) => {
        if (!replica) {
            throw new Error('REPLICA_NOT_FOUND')
        }

        if (checkParams) {
            let keys = [ "codigo", "livro_id" ]

            if (!arrayKeysExists(keys, replica)) {
                throw new Error('INVALID_PARAMTERS')
            }
        }
    }

    return {
        verify
    }
}

module.exports = ReplicaFactory()
