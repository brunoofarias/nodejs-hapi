const { arrayKeysExists } = require('./../utils/utils')

const UserFactory = () => {
    const verify = (user, checkParams = true) => {
        if (!user) {
            throw new Error('USER_NOT_FOUND')
        }

        if (checkParams) {
            let keys = [ "nome", "cpf", "data_nascimento", "endereco", "cidade", "estado", "cep", "complemento" ]

            if (!arrayKeysExists(keys, user)) {
                throw new Error('INVALID_PARAMTERS')
            }
        }
    }

    const verifyAuth = (user) => {
        let keys = [ "cpf", "senha" ]

        if (!arrayKeysExists(keys, user)) {
            throw new Error('INVALID_PARAMTERS')
        }
    }

    return {
        verify,
        verifyAuth
    }
}

module.exports = UserFactory()
