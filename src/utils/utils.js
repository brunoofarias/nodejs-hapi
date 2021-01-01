const arrayKeysExists = (keys, object) => {
    let allKeysExists = true

    keys.forEach(key => {
        if (!object[key]) {
            allKeysExists = false
        }
    })

    return allKeysExists
}

module.exports = {
    arrayKeysExists
}
