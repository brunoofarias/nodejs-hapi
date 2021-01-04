const { arrayKeysExists } = require('./../utils/utils')

const RentFactory = () => {
    const verify = (rent, checkParams = true) => {
        if (!rent) {
            throw new Error('RENT_NOT_FOUND')
        }

        if (checkParams) {
            let keys = [ "copia", "usuario", "dias" ]

            if (!arrayKeysExists(keys, rent)) {
                throw new Error('INVALID_PARAMTERS')
            }
        }
    }

    return {
        verify
    }
}

module.exports = RentFactory()
