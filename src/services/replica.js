const replicaModel = require('./../models/replica')()

const ReplicaServices = () => {
    const save = async (replica) => {
        return new Promise((resolve, reject) => {
            replicaModel.save(replica).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const searchByID = (replica) => {
        return new Promise((resolve, reject) => {
            replicaModel.searchByID(replica).then(
                result => {
                    resolve(result.message)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const update = (replica, id) => {
        return new Promise((resolve, reject) => {
            replicaModel.update(replica, id).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    const deleteReplica = (replica) => {
        return new Promise((resolve, reject) => {
            replicaModel.deleteReplica(replica).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            ) 
        })
    }

    const search = (replica) => {
        return new Promise((resolve, reject) => {
            replicaModel.search(replica).then(
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
        deleteReplica,
        search
    }
}

module.exports = ReplicaServices()
