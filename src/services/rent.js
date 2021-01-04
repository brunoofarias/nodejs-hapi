const rentModel = require('./../models/rent')()

const RentServices = () => {
    const create = async (rent) => {
        let userDayledRents = await rentModel.getDelayedRentalsByUser(rent.usuario)

        return new Promise((resolve, reject) => {
            if (userDayledRents.rents.length >= 2) {
                reject(new Error('USER_IN_BLACK_LIST'))
                return
            }

            rentModel.create(rent).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const markAsreturned = (rent) => {
        return new Promise((resolve, reject) => {
            rentModel.markAsreturned(rent).then(
                result => {
                    resolve(result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const searchByID = (rent) => {
        return new Promise((resolve, reject) => {
            rentModel.searchByID(rent).then(
                result => {
                    resolve(result.message)
                },
                error => {
                    reject(new Error(error.message))
                }
            )  
        })
    }

    const getBooksMostDelayedPerMonth = () => {
        return new Promise((resolve, reject) => {
            rentModel.getBooksMostDelayedPerMonth()
            .then(
                result => {
                    resolve(result.result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )
        })
    }

    const getBooksMostRentedPerCity = () => {
        return new Promise((resolve, reject) => {
            rentModel.getBooksMostRentedPerCity()
            .then(
                result => {
                    resolve(result.result)
                },
                error => {
                    reject(new Error(error.message))
                }
            )
        })
    }

    return {
        create,
        markAsreturned,
        searchByID,
        getBooksMostDelayedPerMonth,
        getBooksMostRentedPerCity
    }
}

module.exports = RentServices()
