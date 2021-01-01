const userModel = require('./../models/user')()

const UserServices = () => {
    const save = async (user) => {
        return new Promise((resolve, reject) => {
            userModel.save(user).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const searchByID = (user) => {
        return new Promise((resolve, reject) => {
            userModel.searchByID(user).then(
                result => {
                    resolve(result.message)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const update = (user, id) => {
        return new Promise((resolve, reject) => {
            userModel.update(user, id).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    const deleteUser = (user) => {
        return new Promise((resolve, reject) => {
            userModel.deleteUser(user).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    const search = (user) => {
        return new Promise((resolve, reject) => {
            userModel.search(user).then(
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
        deleteUser,
        search
    }
}

module.exports = UserServices()
