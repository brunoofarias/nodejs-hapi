const bookModel = require('./../models/book')()

const BookServices = () => {
    const save = async (book) => {
        return new Promise((resolve, reject) => {
            bookModel.save(book).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const searchByID = (book) => {
        return new Promise((resolve, reject) => {
            bookModel.searchByID(book).then(
                result => {
                    resolve(result.message)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const update = (book, id) => {
        return new Promise((resolve, reject) => {
            bookModel.update(book, id).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    const deleteBook = (book) => {
        return new Promise((resolve, reject) => {
            bookModel.deleteBook(book).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    const search = (book) => {
        return new Promise((resolve, reject) => {
            bookModel.search(book).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    return {
        save,
        searchByID,
        update,
        deleteBook,
        search
    }
}

module.exports = BookServices()
