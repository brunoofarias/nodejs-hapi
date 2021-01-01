const { arrayKeysExists } = require('./../utils/utils')

const UserFactory = () => {
    const verify = (user, checkParams = true) => {
        if (!user) {
            throw new Error('USER_NOT_FOUND')
        }

        if (checkParams) {
            let keys = [ "nome", "cpf", "data_nascimento", "endereco" ]

            if (!arrayKeysExists(keys, user)) {
                throw new Error('INVALID_PARAMTERS')
            }
        }
    }

    return {
        verify
    }
}

module.exports = UserFactory()
