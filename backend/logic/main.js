const getData = require('../data/getData')

const start = async (readFile_path) => {
    const data = getData(readFile_path)
        .then((results) => results)
        .catch((err) => console.log('error', err))
    console.log('data', await data)

}

module.exports = start