const readCsvFile = require('../util/readFile')

const getData = (path) => {
    return new Promise((resolve, reject) => {
        readCsvFile(path, (err, results) => {
            if (err) {
                console.error(err);
                reject(err)
            } else {
                resolve(results)
            }
        });
    })
}

module.exports = getData
