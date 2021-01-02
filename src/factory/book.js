const { arrayKeysExists } = require('./../utils/utils')

const BookFactory = () => {
    const verify = (book, checkParams = true) => {
        if (!book) {
            throw new Error('BOOK_NOT_FOUND')
        }

        if (checkParams) {
            let keys = [ "livro", "autor", "isbn" ]

            if (!arrayKeysExists(keys, book)) {
                throw new Error('INVALID_PARAMTERS')
            }
        }
    }

    return {
        verify
    }
}

module.exports = BookFactory()
