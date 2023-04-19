const {parse} = require('csv-parse');
const fs = require('fs');

const readCsvFile = (filePath, callback) => {
    const results = [];
    fs.createReadStream(filePath)
        .pipe(parse({
            columns: true,
            skip_empty_lines: true
        }))
        .on('data', (row) => {
            results.push(row);
        })
        .on('error', (err) => {
            callback(err);
        })
        .on('end', () => {
            callback(null, results);
        });
}


module.exports = readCsvFile