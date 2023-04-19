const {restClient} = require('@polygon.io/client-js');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('dotenv').config()

const rest = restClient(process.env.POLYGON_API_KEY)

const writeFile = async (writeFile_path) => {
    const results = []
    await rest.stocks.aggregates("AAPL", 1, "minute", "2023-01-10", "2023-02-10").then((data) => {
        results.push(data.results)
    }).catch(e => {
        console.error('An error happened:', e);
    });
    const csvWriter = createCsvWriter({
        path: writeFile_path,
        header: [
            {id: 'v', title: 'v'},
            {id: 'vw', title: 'vw'},
            {id: 'o', title: 'o'},
            {id: 'c', title: 'c'},
            {id: 'h', title: 'h'},
            {id: 'l', title: 'l'},
            {id: 't', title: 't'},
            {id: 'n', title: 'n'},
        ]
    })
    const writeStream = fs.createWriteStream(writeFile_path);
    writeStream.write('v,vw,o,c,h,l,t,n\n');

    csvWriter.writeRecords([].concat(...results))
        .then(() => {
            console.log(results)
            console.log('CSV file written successfully');
        })
        .catch((error) => {
            console.error('Error writing CSV file:', error);
        });

    writeStream.end();
}

module.exports = writeFile